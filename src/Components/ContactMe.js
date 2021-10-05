import React from "react";
import emailjs from 'emailjs-com'; 

const ContactMe = () => {

  function sendEmail(e) {
    e.preventDefault(); 

    emailjs.sendForm('service_k8zesyk', 'template_hrzm03x', e.target, 'user_A6LvA340P4nCzBwlFdqRG') 
       .then((result) => {
        alert("Message Sent, I will get back to you shortly", result.text);
        }, (error) => {
          alert("An error occurred, Please try again", error.text);
        })
  }

  return (
    
	<section Name="ftco-section">
  <div className="container">
    <div className="row justify-content-center">
      
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className="wrapper">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3>Contact Me</h3>
                <p className="mb-4">Open for any suggestions or just to have a chat</p>
                <div id="form-message-warning" className="mb-4"></div> 
                <div className="row mb-4">
                  <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="text">
                        <p><span>Address:</span> 7 Campground Rd. Beaver Dams, NY 14812</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="text">
                        <p><span>Email:</span> <a href="mailto:WendyHarris8765@gmail.com">WendyHarris8765@gmail.com</a></p>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="col-md-4">
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="text">
                        <p><span>Phone:</span> <a href="tel://1234567920">(607) 542-7349</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="contactForm" onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-12"> 
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div class="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Create a message here"></textarea>
                      </div>
                    </div>
                    <div classNameName="col-md-12">
                      <div className="form-group">
                        <input type="submit" value="Send Message" className="btn btn-primary" />
                        <div className="submitting"></div>
                      </div>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
              <div className="col-lg-6 d-flex align items-stretch">
                <div className="info-wrap w-100 p-5 img" style={{ backgroundImage: "url(assets/images/img.jpg)",
                                                                  backgroundPosition: 'center', 
                                                                  backgroundSize: 'cover',
                                                                  backgroundRepeat: 'no-repeat'  
                                                                  
                                                                  }} >
                  
              </div>
			      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</section>
  
  );
};



export default ContactMe;
