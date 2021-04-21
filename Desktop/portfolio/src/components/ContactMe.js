import React from "react";

const ContactMe = () => {
    return (
    <div className="formbody">
        <form className="form">
            <h1>Contact Me  <i className="fa-mail-bulk"></i></h1>

            <label>Name:</label>
            <input placeholder="name" /> 

            <label>Email:</label>
            <input placeholder="email" />

            <label>Message:</label>
            <textarea placeholder="Message"></textarea>
        
            <button type="submit"> Submit </button>

        </form>
    </div>
    )
}

export default ContactMe
