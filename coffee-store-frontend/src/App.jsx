import './App.css'
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar'
import { Outlet } from "react-router";

function App() {

  return (
    <div className='font-primary'>
    {/* this is navbar section */}
      <nav>
        <Navbar />
      </nav>

      {/* this is website body section*/}
      <Outlet />

      <footer>
        {/* <Footer /> */}
      </footer>
      
    </div>
  )
}

export default App
