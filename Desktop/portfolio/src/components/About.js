import React from "react";

function About() {
    return (
        <div className="about-wrapper">
            <div className="about">
              <h1> About </h1>
              <div className="picture"> 
                <img  src={`${process.env.PUBLIC_URL}/picture.png.jpg`}
                      alt="profile picture" 
                /> 
              </div>
            </div>
        </div>
    )
}

export default About