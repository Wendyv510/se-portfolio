/**import React from "react";
import "../App.css" 
import {db } from "../Firebase"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { mail-bulk } from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection('contacts').add({
            name:name,
            email:email,
            message:message
        })
        .then(() => {
            alert("Message has been submitted ");
            setLoader(false)
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false)
        })

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
    <div className="formbody">
        <form className="form" onSubmit={handleSubmit}>



            <h1>Contact Me  <FontAwesomeIcon icon="mail-bulk" /></h1>
            
            <label>Name:</label>
            <input 
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> 

            <label>Email:</label>
            <input 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

            <label>Message:</label>
            <textarea 
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
        
            <button type="submit"> Submit </button>

        </form>
    </div>
    )
}

export default ContactMe  */
