import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // function random(){
  //   const a = Math.random().toFixed(2);
  //   console.log(a);
  // }
  // random();

  // const [number, setNumber] = useState(0);
  // const [number2, setNumber2] = useState(100);

  // useEffect(function(){
  //   console.log("Use effect is running....");
  // })


  // useEffect(function(){
  //   console.log("Use effect is running....");
  // },[number])

  // useEffect(function(){
  //   console.log("Use effect is running....");
  // },[])


  const [a,setA] = useState(0);
  const [b,setB] = useState(0);

  function aChanging(){
    console.log("A ki value Che");
  }

  function bChanging(){
    console.log("B ki value Che");
  }

  useEffect(function(){
    aChanging()
  },[a])

  useEffect(function(){
    bChanging()
  },[b]);

  return (
    <div>
      <h1>A ki {a}</h1>
      <h1>B ki {b}</h1>
      <button onClick={()=> {
        setA(a+1);
      }}>Chane A</button>
      <button onClick={()=> {
        setB(b-1);
      }}>Change B</button>
      {/* <h1>Value of num is {number}</h1>
      <h1>Value of num2 is {number2}</h1>
      <button onMouseEnter={() => {
        // setNumber(10)
        setNumber(number + 1)
      }}
        onMouseLeave={() => {
          setNumber2(number2 + 10)
        }}>Click me</button> */}
    </div>
  )
}

export default App
