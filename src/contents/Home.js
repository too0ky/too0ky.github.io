import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/profile.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        document.title = 'Trang Ngo'
        return (
            <div className="hcondiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Trang Ngo','I am an aspiring developer']} speed={175} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    