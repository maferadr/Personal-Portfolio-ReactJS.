import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

function App() {

  return (
    <div className="bg-amber-50">
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App;
