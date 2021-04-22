import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faBars } from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to = "/Header">Home </Link>
      </li>
      <li className="nav-item">
        <Link to = "/About">About</Link>
      </li>
      <li className="nav-item">
      <Link to = "/Resume">Resume</Link>
      </li>
      <li className="nav-item">
      <Link to = "/About">Projects</Link>
      </li>
      <li className="nav-item">
      <Link to = "/About">Blog</Link>
      </li>
      <li className="nav-item">
      <Link to = "/About">Contact Me</Link>
      </li>
    </ul>
    
  </div>
</div>
</nav>
    )
}

export default Navbar
