import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   console.log(data);
  // }

  // const getData = async () =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json()
  //   console.log(data);
  // }

  // const getData = async () =>{
  //   const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
  //   console.log(data);
  // }
  const [data,setData] = useState([]);

  const getData = async () =>{
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>GetData</button>
      <div className="">
        {
          data.map(function(elem,idx){
            return <h1>P.C.HAdiya {elem.author} {idx}</h1>
          })
        }
      </div>
    </div>
  )
}

export default App
