import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
              <h1> Wendy Harris </h1>
              <Typed 
                 className="typed-text"
                 strings={["Software Engineer", "Full Stack Developer"]}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
              />
              <a href ="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
