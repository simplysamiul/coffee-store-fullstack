import './App.css'
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar'
import { Outlet } from "react-router";

function App() {

  return (
    <>
    {/* this is navbar section */}
      <nav>
        <Navbar />
      </nav>

      {/* this is website body section*/}
      <Outlet />

      <footer>
        <Footer />
      </footer>
      
    </>
  )
}

export default App
