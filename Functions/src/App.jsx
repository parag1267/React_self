import React from 'react'

const App = () => {
  const btnClicked = () => {
    console.log("Button is an Clicked");
  }

  function mouseEnter() {
    console.log("Mouse Entered");
  }
  function inputChangeing(value) {
    console.log(value);    
  }

  const pageScrolling = (elem) => {
    // console.log("Page Scrolling speed",elem);
    if(elem > 0){
      console.log("Sedhha Scrolling");
    }
    else {
      console.log("Ulta Scrolling");
    }
  }

  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY);
    }}>
      {/* <h1>P.C.HAdiya</h1>
      <button onClick={() => {
        console.log("Button Clicked")
      }} onMouseEnter={mouseEnter}>Change user</button>

      <h2>Reuse event</h2>
      <button onClick={function(){
        console.log("Button Clicked")
      }} onMouseEnter={mouseEnter}>Change user</button> */}

      {/* <input onChange={function(elem){
        inputChangeing(elem.target.value);
      }} type="text" placeholder='Enter name' /> */}

      {/* <div onMouseMove={(elem) => {
        console.log(elem.clientY)
      }} className='box'>
      </div> */}

      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
      <div className="page4"></div>
    </div>
  )
}

export default App
