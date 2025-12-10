import React, { useState } from 'react'

const App = () => {
  // const [num,setNum] = useState(20);
  
  // const [userName,setUserName] = useState("P.C.Hadiya");

  // const [users,setUsers] = useState([10,20,30,40]);

  // const [year,setYear] = useState(1971);


  const [num,setNum] = useState(0)

  // function changeNum(){
  //   setNum(40);
  //   setUserName("P.C.HAdiya");
  //   setUsers([10,20,60,70]);
  //   setYear(2004);
  // }

  function increaseNumber(){
    setNum(num+1);
  }

  function decreaseNumber(){
    if(num > 0){
      setNum(num-1);
    }
  }


  function jumpNumber(){
    setNum(num*2);
  }

  function CalcNumber(){
    setNum(num/2);
  }

  return (
    <div>
      {/* <h1>Value of number is {num} <br /> Year {year} <br /> {users} <br /> Value of user is {userName}</h1>
      <button onClick={changeNum}>Click</button> */}
      <h1>{num}</h1>
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
      <button onClick={jumpNumber}>Increase by an 4</button>
      <button onClick={CalcNumber}>Multipication</button>
    </div>
  )
}

export default App
