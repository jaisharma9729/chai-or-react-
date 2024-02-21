import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "hitesh",
    age : 21
  }
  let Arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl text-black mb-4'>Tailwind Css</h1>
      <Cards  username="hitesh" btnText = "View Profile"  />
      <Cards username="Mohit"  btnText = "Show Me "/>
    </>
  )
}

export default App
