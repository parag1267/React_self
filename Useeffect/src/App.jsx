import { useEffect, useState } from 'react'
import './App.css'
import LoggerComponet from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponet from './components/ResizeComponet'
import MultiEffectComponent from './components/MultiEffectComponent'

function App() {
  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(1);
  // Varation 1
  // Runs on every render
  // useEffect(() => {
  //   console.log("P.C.HAdiya");
  // })

  // Varation 2
  // That runs on only first render
  // useEffect(() => {
  //   console.log("P.C.HAdiya");
  // },[])

  // Varation 3
  // I will run every time when count is updated
  // useEffect(() => {
  //   console.log("P.C.HAdiya");
  // },[count])

  // Varation 4
  // Multiple depedencies
  // useEffect(() => {
  //   console.log("P.C.HAdiya");
  // },[count,total]);

  // Varation 5
  // Is baar let's add a Cleanup function
  // useEffect(()=>{
  //   console.log("Count is an updated");
  //   return () => {
  //     console.log("Count is an unmounted from ui");
  //   }
  // },[count]);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }
  
  return (
    <div>
      {/* <LoggerComponet /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponet /> */}
      {/* <MultiEffectComponent /> */}
      {/* <h1>P.C.HAdiya</h1>
      <button onClick={handleClick}>Update me</button>
      <br />
      <p>Count : {count}</p>
      <br /> */}
      {/* <button onClick={handleClickTotal}>Click me</button>
      <br />
      <p>Total : {total}</p>
      <br /> */}
    </div>
  )
}

export default App
