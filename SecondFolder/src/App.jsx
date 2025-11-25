import React from 'react'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx';

const App = () => {

  const user = "P.C.HAdiya";
  const year = 22;

  return (
    <div>
      {Card()}
      <Card />
      <Navbar />
      <Navbar />
      {/* Or <Card /> */}

      <div>
        <h1>Hello guys, I am {user}</h1>
        <h2>And I am {year} year old</h2>
      </div>

      
    </div>
  )
}

export default App
