import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // const [count,setCount] = useState(0);
  // let valu = useRef(0);
  // let colorRef = useRef();
  // function handleClick(){
  //   valu.current = valu.current + 1
  //   console.log("Value of valu:",valu);
  //   setCount(count + 1);
  // }

  // useEffect(() => {
  //   console.log('Me fir Che tair Chu render')
  // })

  // function handlebgColorChnage (){
  //   colorRef.current.style.backgroundColor = "blue";
  // }


  const [time,setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }
  return (
    <div>
      {/* <button ref={colorRef} onClick={handleClick}>Increment</button>
      <br />
      <br />
      <button onClick={handlebgColorChnage}>Background Color Change karo</button>
      <br />
      <h1>Count : {count}</h1> */}

      <h1>StopWatch: {time} Seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <br />
      <button onClick={resetTimer}>Reset</button>
    </div>  
  )
}

export default App
