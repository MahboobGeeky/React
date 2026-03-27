import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from ".";

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-white text-center mb-5">
          Add Todo
        </h2>

        <form className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your task..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white px-5 py-2 rounded-lg transition-all duration-200"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
