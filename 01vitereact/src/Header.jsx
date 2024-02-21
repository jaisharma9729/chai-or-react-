import React, { useState } from 'react'

const Header = () => {
    const [count, setCount] = useState(5)

    const increase  = () => {
        if (count < 20) {
            setCount(count +1)
        }
    }
    const decrease =  () => {
        if (count > 0) {
            setCount(count -1)
        }
    }
  return (
    <div>
      <h1>Header</h1>


      <button onClick={increase}>Increase {count}</button>
      <p>{count} </p>
      <button onClick={decrease}>Decrease {count}</button>
    </div>
  )
}

export default Header