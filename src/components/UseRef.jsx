import React from 'react'
import { useRef } from 'react'
const UseRef = () => {

  const myref = useRef(null)
  console.log(myref)

  const focusinput =() =>
    {
myref.current.focus()

    }
  return (
    <div>

    <input ref={myref} type="text" />
    <button onClick={focusinput}>Focus</button>
    </div>
  )
}

export default UseRef