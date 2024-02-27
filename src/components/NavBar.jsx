import { NavLink } from "react-router-dom"

// images
import SMMLogo from '../assets/images/SMM-Logo.svg'

// bootstrap


const NavBar = () => {
  return ( 
    <header>
      <nav className="nav-container">
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