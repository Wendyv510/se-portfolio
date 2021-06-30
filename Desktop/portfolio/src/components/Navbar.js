import React from "react"

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
        <a href to = "/Header">Home </a>
      </li>
      <li className="nav-item">
        <a href to = "/About">About</a>
      </li>
      <li className="nav-item">
      <a href to = "/Resume">Resume</a>
      </li>
      <li className="nav-item">
      <a href to = "/About">Projects</a>
      </li>
      <li className="nav-item">
      <a href to = "/About">Blog</a>
      </li>
      <li className="nav-item">
      <a href to = "/About">Contact Me</a>
      </li>
    </ul>
    
  </div>
</div>
</nav>
    )
}

export default Navbar
