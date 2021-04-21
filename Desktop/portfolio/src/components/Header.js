import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
              <h1> Wendy Harris Software Engineer </h1>
              <Typed 
                 className="typed-text"
                 strings={["Web Desing", "Web Development"]}
                 typeSpeed={40}
                 backSpeed={60}
              />
            </div>
        </div>
    )
}

export default Header
