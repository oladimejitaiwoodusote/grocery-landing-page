import "../styles/Navbar.css"
import { useState } from "react"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="Navbar">
        <div className = "Navbar_left">
            <span>Easy</span>
            <span>Eats</span>
        </div>
        <div className = "Navbar_right">
            <span>Home</span>
            <span>About Us</span>
            <span>Our Service</span>
            <span>Pages</span>
        </div>

        <div className="Navbar_toggle" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  )
}

export default Navbar