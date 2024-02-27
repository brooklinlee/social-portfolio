import { NavLink } from "react-router-dom"

// javascript
import { someFunction } from "./NavBar"

// images
import SMMLogo from '../../assets/images/SMM-Logo.svg'

const NavBar = () => {
  
  someFunction()
  
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