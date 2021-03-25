import React, { Component } from 'react';
import Social from '../components/Social';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contact Me</h1>
            <h2>Email  : <i>contact.tngo@gmail.com</i></h2><br></br>
            <h1 className="subtopic">Send me a message if you would like to get in touch!</h1>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    