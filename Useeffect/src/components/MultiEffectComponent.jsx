import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count,setCount] = useState(0);
    const [second,setSecond] = useState(0);


    useEffect(() => {
        console.log('Count Changed:',count);
    },[count]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Setinterval Started")
            setSecond(prevSeconds => prevSeconds + 1);
        },1000);
        return () => {
            console.log("Stop Time");
            clearInterval(intervalId);
        }
    },[]);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Seconds : {second}</h2>
    </div>
  )
}

export default MultiEffectComponent
