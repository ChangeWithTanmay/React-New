import { useState, useEffect, useCallback, useRef } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  // It is a Normal function:
  // const passwordGenerator = () => {}

    // useRef Hook
    const passwordRef = useRef(null)

  // It is HOOKS: useCallback
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (numberAllow) {
      str += '1234567890'
    }

    if (charAllow) {
      str += '~!@#$%^&*()[]{}?/|<>'
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numberAllow, charAllow]);

  
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20)
    window.navigator.clipboard.writeText(password)
  },[password])

// HOOK: useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])
  

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-600  bg-gray-800 text-center'>
        <h1 className='text-white font-bold text-xl text-center my-3'>Password Generator</h1>
        <div className='flex shadow  rounded-lg overflow-hidden mb-4 gap-2'>
          <input
            type="text"
            value={password}
            className='outline-none w-full my-2 py-1 px-3 bg-gray-300 rounded-md font-medium placeholder:text-gray-700 placeholder:font-semibold'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className=' outline-none my-2 py-1 px-3 bg-orange-600 text-white font-semibold border-1 border-transparent rounded-md shadow-2xs cursor-pointer hover:border-cyan-100 hover:bg-orange-800'
          onClick={copyPasswordToClipBoard}
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1.5 '>
            <input 
            type="range" 
            min={8} 
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label  >Leangth: {length}</label>
          </div>
          
          <div className='flex item-center gap-x-1.5 '>
            <input 
            type="checkbox"
            defaultChecked={numberAllow}
            id="numberInpur"
            onChange={() => setNumberAllow((prev) => !prev)}
             />
             <label >Numbers</label>
          </div>
          <div className='flex item-center gap-x-1.5 '>
            <input 
            type="checkbox"
            defaultChecked={numberAllow}
            id="numberInpur"
            onChange={() => setCharAllow((prev) => !prev)}
             />
             <label  >Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
