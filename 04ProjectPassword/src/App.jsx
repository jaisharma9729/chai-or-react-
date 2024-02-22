import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback (() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed)str += '0123456789'
    if(charAllowed)str += '!@#$%^&*()'

    for(let i = 0; i <length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard =  useCallback ( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    .navigator.clipboard.writeText(password)
  },[password] )

  useEffect(() => {
    PasswordGenerator()
  },[length,numberAllowed,charAllowed,PasswordGenerator])


  return (
    <>
    <div className='w-full	max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-3 bg-gray-500 text-orange-500'>
    <h1 className=' text-center text-white my-3'>Password Generator</h1>

    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type='text' value={password}
    className='w-full py-1 outline-none px-3 text-gray-500 focus:outline-none'
    placeholder='Password' readOnly ref={passwordRef}
    />
      
      <button onClick={copyPasswordToClipboard} className='bg-blue-500 py-1 px-3 text-white'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
    <input 
      type='range'
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e) => {setLength(e.target.value)}}
      ref={passwordRef}
    />
    <label>Length {length}</label>

    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox' defaultChecked={numberAllowed}
      id='numberAllowed'
      onChange={ () => {
        setNumberAllowed((prev) => !prev);
      }} />
    <label htmlFor='numberInput'>Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type='checkbox' defaultChecked={charAllowed}
      id='charAllowed'
      onChange={ () => {
        setCharAllowed((prev) => !prev);
      }} />
    <label htmlFor='CharacterInput'>Characters</label>
    </div>

    </div>
    </div>
    </>
  )
}

export default App
