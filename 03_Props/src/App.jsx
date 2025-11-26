import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className="parent">
      <Card user="PARAG" year={22} img="https://plus.unsplash.com/premium_photo-1669014857200-f92ee160a20f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="PArag" year={18} img="https://images.unsplash.com/photo-1762983870490-63e5ba07105b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
