import React, { useState , useMemo} from 'react'

const UseMemo = () => {
  const [count,setcount]= useState(0);
  const [item,setitem]= useState(10);

  const multicountMemo = useMemo(function multicount(){

    console.log("multicount")
    return count * 5
  },[count])
  return (
    <div>

      <h1>use memo</h1>
      <h2>count:{count}</h2>
      <h2>item:{item}</h2>
      <h2>{multicountMemo}</h2>
      <button onClick={()=>setcount(count +1)}>update count</button>

       <button onClick={()=>setitem(count +1)}>update item</button>
    </div>
  )
}

export default UseMemo