import './App.css'
import UserCard from './components/UserCard'
import PCHAdiya from './assets/PCHAdiya.jpg'
import PCHAdiyaSign1 from './assets/PARAG_SIGN1.jpg'
import PCHAdiyaSign2 from './assets/PARAG_SIGN2.jpg'
import TandooriPizza from './assets/TandooriPizza.jpeg'

function App() {
  return (
    <div className="Container">
      <UserCard name="P.C.HAdiya1" desc="Desc1" image={PCHAdiya} style={{"border-radius":"10px"}}/>
      <UserCard name="P.C.HAdiya2" desc="Desc2" image={PCHAdiyaSign1} style={{"border-radius":"10px"}}/>
      <UserCard name="P.C.HAdiya3" desc="Desc3" image={PCHAdiyaSign2} style={{"border-radius":"10px"}}/>
      <UserCard name="P.C.HAdiya4" desc="Desc4" image={TandooriPizza} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
