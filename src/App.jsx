import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/UI/pages/Main';

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App;
