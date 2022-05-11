import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Resume extends Component {
    render() {
        document.title = 'Resume'
        return (
            <div className="condiv">
            <h1 className="subtopic">My Resume</h1>
            <h2><u>SKILLS</u>: HTML | CSS | JAVASCRIPT | PYTHON | DJANGO| REACT | PANDAS | SQL | TABLEAU | POSGRES</h2>
            <Widecard title="Responsive Web Design" where="FreeCodeCamp, Remote" from="January 2020"  to="April 2020"  role="Completion of FreeCodeCamp 'Responsive Web Design' course"/>
            
            <Widecard title="Data Analysis with Python" where="FreeCodeCamp, Remote" from="October 2020" to="November 2020" role="Completion of FreeCodeCamp 'Data Analysis with Python' course"/>
            
            <Widecard title="SQL" where="Codecademy, Remote" from="October 2020" to="November 2020" role="Completion of Codecademy 'Learn SQL' course"/>
            
            <Widecard title="Design Databases With PostgreSQL" where="Codecademy, Remote" from="October 2020" to="November 2020" role="Completion of Codecademy 'Design Databases With PostgreSQL Skill Path' course "/>
            
            <Widecard title="English Instructor " where="English Lab, Hungary" from="June 2019" to="Present" role="Created and facilitate Business English courses in a remote setting."/>
            
            <Widecard title="English Instructor " where="Budapest AfterSchool, Hungary" from="February 2019" to="July 2020" role= "Taught English to young learners to help them develop their receptive and productive skills with fun and engaging group sessions."/>
            
            <Widecard title="English Instructor" where="Tower Languange School, Hungary" from="October 2018" to="August 2020" role= "Created and tailored lesson plans for adults focusing on General and Business English as well as Exam Preparation in both groups and individual setting"/>
            
            <Widecard title="Outreach Manager" where="SEO Gorillaz, Remote" from="June 2018" to="August 2018" role ="Strategically manage client’s SEO optimization by coordinating outreach support through written communication and
            facilitating content creation."/>
            
            <Widecard title="English Instructor" where="ILA, Vietnam" from="January 2017" to="December 2017" role ="Instructed a variety of students in conversational and global English at one of
            Vietnam’s top private language institute."/>
            
            <Widecard title="Professor of English" where="SENA, Colombia" from="February 2016" to="December 2016" role="Taught students English at a technical institute."/>
            </div>
            )
        }
    }
    
export default Resume
    
