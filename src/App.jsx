import { useState } from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
