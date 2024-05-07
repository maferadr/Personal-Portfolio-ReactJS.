import { Outlet } from 'react-router-dom'
import Nav from './components/Nav';
//Aos animation
import {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({duration: 1000})
}, []);

  return (
    <div>
      <Nav/>
     <Outlet/>
    </div>
  )
}

export default App;
