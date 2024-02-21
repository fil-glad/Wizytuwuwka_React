import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Podstr3 from './Podstr3'
import Podstr1 from './Podstr1'
import Podstr2 from './Podstr2'
import Home from './Home'
import Java_cos from './Java_cos'
function App() {

  return (
    <div>
    <nav>
      <li> 
        <Link to="/"> Home </Link>
      </li>
      <li>
         <Link to="/str1">Podstrona1 </Link>
      </li>
      <li> 
        <Link to="/str2">Podstrona2 </Link>
        </li>
      <li> 
        <Link to="/str3">Podstrona3 </Link>
        </li>
      <li> 
        <Link to="/java">Java </Link>
      </li>
    </nav>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/str1" element={<Podstr1/>}/>
     <Route path="/str2" element={<Podstr2/>}/>
     <Route path="/str3" element={<Podstr3/>}/>
     <Route path="/java" element={<Java_cos/>}/>
    </Routes>
    </div>
    
  )
}


export default App
