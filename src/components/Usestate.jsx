import React from 'react';
import { useState } from 'react';

const Usestate = () => {
const [counter,setCounter]=useState(0);

  const increase=()=>{
    setCounter(counter+1)
// counter++;
// console.log("increase function",counter)

  }

  const decrease=()=>{
    if (counter > 0) {
    setCounter(counter-1)
    }
// counter--;
//     console.log("decrease function",counter)
  }
  return (
    <>
    <h1>{counter}</h1>

    <button onClick={increase}>increase</button>
     <button onClick={decrease}>deincrease</button>
     </>
  )
}

export default Usestate