
import '../css/Nav-bar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='Nav-Bar'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
