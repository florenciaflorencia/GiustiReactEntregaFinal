import "./Navbar.css"
import logo from "../assets/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <img className='logo'  src={logo} /> 
        <div className="navbar container-fluid ">
          <div className="m-auto" id="navbarNav">
          <ul className="navbar-nav">
              <li  className='menu' >
                <Link id="item" to = '/'>
                <p id="p">INICIO</p>
                </Link>
              </li>
              <li className='menu'  >
              <Link id="item" to = '/category/bazar'>
                <p id="p">BAZAR</p>
                </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/organizadores'>
                <p id="p">ORGANIZADORES</p>
              </Link>
              </li>
              <li className='menu' >
              <Link id="item" to = '/category/vajilla'>
                <p id="p">VAJILLA</p>
              </Link>
              </li>
            </ul>
          </div>
         
        </div>
      </nav>
    )
}

export default Navbar