import React from "react";

function About() {
    return (
        <div className="about">
            <div className="intro">
              <h1> Hello - my name is Wendy Harris, I am a daycare provider/preschool Teacher turned Techy/Software Engineer.  </h1>
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