import {useState, useEffect, use } from 'react'
import {useDispatch} from "react-redux"
import authService from '../appwrite/auth'


import './App.css'
import { logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <h1>react app mega blog</h1>
    </>
  )
}


export default App
