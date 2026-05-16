import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import {login} from '../store/store'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'


function Signup() {
    const navegate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if(userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-25"> //check
                        <Logo width="100%" />
                    </span>
                </div>
            </div>
             <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p> }

            <form onSubmit={handleSubmit(create)}>
                <div className='space-y-5'>
                    <Input
                    label = "Full Name: "
                    type="email"
                    placeholder="Enter your full name"
                    {...register("name", {
                        required: true,
                    })}
                    />
                    <Input
                    label = "Email: "
                    placeholder = "Enter your email address"
                    {...register("email", {
                        required:true,
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "enter valid email address"
                        }
                    })}
                    />
                    <Input
                    label="password"
                    type="password"
                    placeholder="enter your pasword"
                    {...register("password", {
                        required:true,
                    })}
                    />
                    <Button
                    type="submit"
                    className="w-full"
                    >Create Account</Button>
                </div>
            </form>
        </div>
    )
}

export default Signup
