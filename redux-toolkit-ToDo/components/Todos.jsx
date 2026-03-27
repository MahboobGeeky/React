import React from "react";

const Todo = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Todo App
        </h1>

        {/* Input + Button */}  
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          
          {/* Single Todo Item */}
          <li className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg">
            <span className="text-white">Learn Redux Toolkit</span>
            <button className="text-red-400 hover:text-red-500">
              Delete
            </button>
          </li>

          <li className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg">
            <span className="text-white">Build Todo App</span>
            <button className="text-red-400 hover:text-red-500">
              Delete
            </button>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Todo;