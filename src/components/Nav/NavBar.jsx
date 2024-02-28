import { NavLink } from "react-router-dom"
import { useEffect, useRef } from "react"

// javascript
import { addScrollListener } from "./NavBar"

// images
import SMMLogo from '../../assets/images/SMM-Logo.svg'

const NavBar = () => {

  const navbarRef = useRef(null)

  useEffect(() => {
    const navbar = navbarRef.current
    addScrollListener(navbar)
  }, [])

  return (
    <header>
      <nav ref={navbarRef} className="nav-container">
          <NavLink to='/' >
            <img src={SMMLogo} alt="brooklin Logo" />
          </NavLink>
          <ul>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
          </ul>
      </nav>
    </header>
  )
}

export default NavBar