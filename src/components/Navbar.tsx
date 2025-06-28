import "../styles/Navbar.css"
import { useEffect, useState } from "react"

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Our Service" },
  { id: "featured", label: "Featured" },
  { id: "goals", label: "Goals" },
  { id: "order", label: "Order" },
  { id: "clients", label: "Clients" },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="Navbar">
      <div className="Navbar_left">
        <span>Easy</span>
        <span>Eats</span>
      </div>

      <div className="Navbar_toggle" onClick={handleToggle}>
        ☰
      </div>

      <div className={`Navbar_right ${isOpen ? "open" : ""}`}>
        {sections.map((section) => (
          <span
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar
