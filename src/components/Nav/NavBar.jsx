import { NavLink } from "react-router-dom"
import { useEffect, useRef } from "react"


// javascript
import { addScrollListener } from "./NavBar"

// images
import SMMLogo from '../../assets/images/SMM-Logo.svg'

const NavBar = ({ brands }) => {

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
            <li className="navLi"><NavLink to='/' >Home</NavLink></li>
            <li className="navLi"><NavLink to='/about'>About</NavLink></li>
            <li className="dropdown">
              <button className="dropbtn " >Portfolio</button>
              <div className="dropdown-content">
                <ul className="dropdown-ul">
                  {brands.map(brand => (
                    <li key={brand.id} className="navLi"><NavLink to={`/portfolio/${brand.id}`} >{brand.name}</NavLink></li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default NavBar