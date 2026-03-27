import { useState } from 'react'
import { addTodo, Todos } from '../components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    {/* <addTodo/> */}
    <Todos/>
   </>
  )
}

export default App
