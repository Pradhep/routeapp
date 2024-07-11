import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import { Router, Routes } from 'react-router-dom'
import {BrowserRouter,Routes,Route,Router,Navigate} from 'react-router-dom'
import Head1 from './Head1'
import Head2 from './Head2'
import Head3 from './Head3'
import Head4 from './Head4'
import Head5 from './Head5'
import Navbar from './Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
   <Navbar/>
      <Routes>

        <Route path='/Head1' element={<Head1 />} />
        <Route path='/Head2' element={<Head2 />} />
        <Route path='/Head3' element={<Head3 />} />
        <Route path='/Head4' element={<Head4 />} />
        <Route path='/Head5' element={<Head5 />} />
        
        <Route path='/' element={<Head1/>}/>
        </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
