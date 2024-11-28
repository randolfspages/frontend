import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Banner from './pages/Home/Banner'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <NavBar />
      <Banner />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
