import "../styles/Navbar.css"


function Navbar() {
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
    </div>
  )
}

export default Navbar