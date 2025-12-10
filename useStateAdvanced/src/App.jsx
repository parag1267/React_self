import React, { useState } from 'react'

const App = () => {
  // const [num,setNum] = useState(10);
  // const [num,setNum] = useState({user:"P.C.HAdiya",year:2004});
  // const [num,setNum] = useState([10,20,30,40]);
  const [num,setNum] = useState(10);

  const btnClicked = () => {
    // console.log(num);
    // setNum(num + 10);
    // console.log(num);
    // console.log(num);

    // console.log(num.user);
    // const newNum = {...num};
    // newNum.user = "P.C.HADIYA";
    // setNum(newNum);
    // console.log(newNum);

    // setNum(prev => ({...num,year:1971}))

    // const newNum = [...num];
    // newNum.push(67);
    // setNum(newNum);
    // console.log(newNum);

    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
    setNum(prev => prev + 1);
  }

  return (
    <div>
    {/* <h1>{num}</h1> */}
    {/* <h1>{num.user} {num.year}</h1> */}
    {/* <h1>{num}</h1> */}
    <h1>{num}</h1>
    <button onClick={btnClicked}>Click</button>    
    </div>
  )
}

export default App
