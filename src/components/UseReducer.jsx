import React from 'react'
import { useReducer } from 'react'

const UseReducer = () => {

  const countreducer=(state,action)=>{

    switch (action.type){
      case "increment":
        return {count:state.count + 1};

      case "decrement":
        if (state.count > 0) {
       return {count:state.count - 1};
        }else{
          return state;
        }
      default:
        return state;
    }
  }
const [state, dispatch] = useReducer(countreducer,{count:0})

  return (
    <div>UseReducer

      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type:"increment"})}>Increase</button>

      <button onClick={() => dispatch({ type:"decrement"})}>decrease</button>
    </div>
  )
}

export default UseReducer