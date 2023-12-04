import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes ,Route, NavLink} from 'react-router-dom'
import Home from './nav/HOme'
import Aboute from './nav/Aboute'
import Serveres from './nav/Serveres'
import Bar from './link/bar'

function App() {
  const [count, setCount] = useState(0)
  const [color,seColor]=useState('red')
  function changColor(){
    if(color=='red'){
      seColor('yellow')
    }
  }

  return (
    <>
    
     {/* <p>
          count is {count}
          </p>
          <p onClick={changColor} style={{color:color}}>hi rajan kumar singh</p>
   
        <button onClick={() => setCount((count) => count + 1)}>click</button>
        */}
       
       <Bar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboute/>}/>
          <Route path='/server' element={<Serveres/>}/>
        </Routes>
      
        
      
      
    </>
  )
}

export default App
