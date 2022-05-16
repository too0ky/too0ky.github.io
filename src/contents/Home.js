import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social';



class Home extends Component {
    render() {
        document.title = 'Trang Ngo | Portfolio'
        return (
            <div className="hcondiv home">
            <img className="profilepic" src="https://i.ibb.co/FWRfZmB/Profile-Pic.jpg" alt="ProfilePic"/>
            <ReactTypingEffect className="typingeffect" text={['I am Trang Ngo','I am an aspiring developer']} speed={175} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    