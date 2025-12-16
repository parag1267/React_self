import React, { useEffect, useState } from 'react'

const LoggerComponet = () => {
    const [count,setCount] = useState(0);

    useEffect (()=>{
        console.log("Component rendered or Count Changed:",count);
    })
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default LoggerComponet
