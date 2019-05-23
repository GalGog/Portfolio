import React, { Component } from 'react';
import Education from '../Education/index';
import Experience from '../Experience/index';
import Skills from '../Skills/index';


class Resume extends Component {
    render() {
        return(
            <div  className="ui stackable two column grid">
                    <div style={{padding: '3em', width:'30%'}}  className="resume-left column">
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Halyna Podyman</h2>
                        <h4 style={{color: 'grey'}}>Front End Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>I am highly-motivated, result oriented, self-driven, hard-working, fast learner and smart eager to be a part of the team, learn new technologies, become a valuable employee of the company and bring it success.</p>
                        <p>Well-organized with an ability to prioritize tasks and capability to work, develop and grow in the company. Experienced in communicating with the team and clients. Attentive and accurate to details.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address: London</h5>
                        <h5>Phone: +44 7549 854467</h5>
                        <h5>Email: halynapodyman@gmail.com </h5>
                    </div>
                    <div style={{width:'70%'}} className="resume-right column" >
                        <h2>Education</h2>


                        <Education
                            startYear={2017}
                            endYear={2018}
                            schoolName="North Hertfordshire College"
                            schoolDescription="Match and ESOL courses"
                        />

                        <Education
                            startYear={2012}
                            endYear={2016}
                            schoolName="National Technical University of Ukraine «Kiev Polytechnic Institute»"
                            schoolDescription="Bachelor 's degree in Avionic, Faculty of aviation and space systems"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="Jr. Front-End Developer - Solutions Plus Limited"
                            jobDescription="- Developing and maintained various types of user interfaces using HTML, CSS and JavaScript;"
                            firstjobDescription="- Transformed complex concepts into simple, elegant and approachable service and product;"
                            secondjobDescription="- Made a User Interface fully adaptive and adjustable for any kind of devices."
                            thertjobDescription="- Analysed UI/UX design for responsive layout for improved usability and accessibility;"
                            fourthjobDescription="- Collaborated with other team members"

                        />

                        <Experience
                            startYear={2016}
                            endYear={2018}
                            jobName="Freelance Front-End Developer"
                            jobDescription="- Turn design pages and specific components into HTML, CSS, JavaScript;"
                            firstjobDescription="- Analysed UI/UX design for responsive layout for improved usability"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            percent={80}
                        />
                        <Skills
                            skill="Bootstrap"
                            percent={70}
                        />
                        <Skills
                            skill="WordPress"
                            percent={60}
                        />
                        <Skills
                            skill="JavaScript"
                            percent={25}
                        />
                        <Skills
                            skill="React/Redux"
                            percent={25}
                        />


                    </div>
            </div>
        )
    }
}

export default Resume;