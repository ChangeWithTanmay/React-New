import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Read New",
    age: "21"
  }

  let newArr = [1,2,3]
  return (
    <>

      <h1 className='bg-green-800 text-white p-4 rounded-2xl'>Hi</h1>
      <Card channel="vectosmind" someObj={myObj} someArr={newArr} btnText="visit me"/>
      <Card />
    </>
  )
}

export default App
