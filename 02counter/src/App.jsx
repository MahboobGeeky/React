import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let count = 15

  const addValue = () =>{
    if(count<20)
      setCount(count+1)
  }

  const removeValue = function() {
    if(count>0)
      setCount(count-1)
  }

  return (
    <>
      <h1>Count value : {count} </h1>
      <button onClick={addValue}>Increse</button>
      <br /> <br />
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
