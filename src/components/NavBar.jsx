import { NavLink } from "react-router-dom"

// images
import SMMLogo from '../assets/images/SMM-Logo.svg'

const NavBar = () => {
  return ( 
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to='/' >
            <img src={SMMLogo} alt="brooklin Logo" />
          </NavLink>
          <NavLink to='/' >Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
      </nav>
    </header>

  )
}

export default NavBar