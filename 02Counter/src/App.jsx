import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const removeValue = () =>{
    if (count === 0) {
      setCount(count + 0)
    }
    else{
      setCount(count - 1)
    }
  }

  const addValue = () =>{
    if(count >= 20){
      setCount(count + 0)
    }
    else{
      setCount(count + 1)
    }
  }

  // Interview question
  const addvalueForInter = () =>{
    setCount((count)=> count+1)
    setCount((count)=> count+1)
    setCount((count)=> count+1)
    setCount((previousCoun)=>previousCoun+1)
    // setCount(count+1)
    // setCount(count+1)
  }

  const quickFix = () =>{
    setCount(20)
  }

  return (
    <>
      <h1>React Hooks with chai our code</h1>
      <h3>{count}</h3>
      <div className="card">
        <button onClick={addValue}>
          Add Product
        </button>
        <button onClick={removeValue}>Remove</button>
        <br /> <br />
        <button onClick={addvalueForInter}>Interview</button>
        <button onClick={quickFix}>quickFix</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
