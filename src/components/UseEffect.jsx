import React from 'react'
import { useEffect } from 'react'


const UseEffect = () => {
// const [count, setcount] = useState(0)
 useEffect(()=>{
   const fetchdata = async ()=>{
    const api= await fetch('https://jsonplaceholder.typicode.com/todos')
  const result = await api.json()
  console.log(result)
   }

fetchdata()

//     console.log("useeffect is running")
//  document.title = count
},[])

  return (
    <div>UseEffect

      {/* <h1>{count}</h1>
      <button onClick={()=>setcount(count+1)}>increse</button> */}
    </div>
  )
}

export default UseEffect