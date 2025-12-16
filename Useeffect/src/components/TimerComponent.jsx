import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [second,setSecond] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=> {
            console.log("setInterval executed")
            setSecond(preSeconds => preSeconds + 1);
        },1000);

        return () => {
            console.log("Stop time")
            clearInterval(intervalId);
        }
    },[])
  return (
    <div>
      <h1>Seconds: {second}</h1>
    </div>
  )
}

export default TimerComponent
