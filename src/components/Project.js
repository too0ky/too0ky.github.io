import React, { Component } from 'react'


class Projects extends Component {
    render() {
        return (
            <div class="projects-section">
            <div class="projects-grid">
            <h1>{this.props.title}</h1>
            <h2> 
                <a href class="project project-tile"></a>
                <img class="project-image" alt=""></img>
                <p class="project-title"></p>
            </h2>
            </div>
            </div>
    
            )
        }
    }
    
export default Projects
    