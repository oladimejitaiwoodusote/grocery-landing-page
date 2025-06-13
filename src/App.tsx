import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Featured from './components/Featured'
import Goals from './components/Goals'
import Order from './components/Order'
import Clients from './components/Clients'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <Featured/>
      <Goals/>
      <Order/>
      <Clients/>
      <Footer/>
    </>
  )
}

export default App
