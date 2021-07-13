import React from "react";

function About() {
    return (
        <div className="about">
            <div className="intro">
              <h3> Hello - my name is Wendy Harris, I am coming from an Early Childhood Education background, looking for a career change.
                <br></br> I recently graduated from the Software Engineering program at Flatiron School. At Flatiron I learned the Ruby language, implementing through Sinatra and Rails frameworks. As well as JavaScript, using React, Redux. Other faculties I use are MySQL, authentication(b-crypt), OmniAuth, JSON.  I am also skilled at using many Microsoft office programs, such as Outlook, Word, Excel, Access. 
                <br></br>I am a self-starter, very professional, and consistent, multi-talented with a drive for success.  From starting work at 14 years old, working for employers in a team environment to running my own business, my morals, diligence, and hark work have been virtuous.    </h3>
              <div className="picture"> 
                <img src="https://i.pinimg.com/originals/e9/96/56/e99656a9410a7e88b3bf3d6c3e25bda4.png"
                     alt="ruby-icon" /> 
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
                     alt="rails-icon" />
                <br></br>
                <img  src={`${process.env.PUBLIC_URL}/picture.png.jpg`}
                      alt="profile" 
                />
                <br></br>
                <img src="data:image/png;base64,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"
                     alt="javascript-icon" /> 
                <img src="https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.6/1602247317454/Microsoft.VisualStudio.Services.Icons.Default"
                     alt="react+redux-icon" /> 
              </div>
            </div>
        </div>
    )
}

export default About