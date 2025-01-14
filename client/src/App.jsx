import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Create from './pages/Create'
import NavBar from './Components/NavBar'


function App() {

  const [toggle , setToggle] = useState("white")

  const setTheme = () =>{
    console.log("here it is ");
    
     setToggle((prevToggle)=> (prevToggle ==="white" ? "black" : "white"))
  }


  return (
    <div className={`${toggle==="white" ? "bg-white text-black" : "bg-black text-white"} min-h-screen`}>
    <NavBar toggle={toggle} setTheme={setTheme}/>
    <Routes>
    
       <Route path="/" element={<HomePage/>} />
       <Route path='/create' element={<Create toggle={toggle} />} />
    </Routes>
    </div>
  )
}

export default App
