import React from "react";
import "../app.css" 
import {db } from "../FIrebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { mail-bulk } from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {
    return (
    <div className="formbody">
        <form className="form">
            <h1>Contact Me  <FontAwesomeIcon icon="mail-bulk" /></h1>
            
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
