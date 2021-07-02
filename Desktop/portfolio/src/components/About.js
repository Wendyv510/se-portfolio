import React from "react";

function About() {
    return (
        <div className="about">
            <div className="intro">
              <h3> Hello - my name is Wendy Harris, I am coming from an Early Childhood Education background, looking for a career change.
                <br></br> I recently graduated from the Software Engineering program at Flatiron School. At Flatiron I learned the Ruby language, implementing through Sinatra and Rails frameworks. As well as JavaScript, using React, Redux. Other faculties I use are MySQL, authentication(b-crypt), OmniAuth, JSON.  I am also skilled at using many Microsoft office programs, such as Outlook, Word, Excel, Access. 
                <br></br>I am a self-starter, very professional, and consistent, multi-talented with a drive for success.  From starting work at 14 years old, working for employers in a team environment to running my own business, my morals, diligence, and hark work have been virtuous.    </h3>
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