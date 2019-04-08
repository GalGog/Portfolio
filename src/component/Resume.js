import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
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
                        <h5>Address</h5>
                        <p>London</p>
                        <h5>Phone</h5>
                        <p>+44 7549 854467</p>
                        <h5>Email</h5>
                        <p>halynapodyman@gmail.com </p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2017}
                            endYear={2018}
                            schoolName="North Hertfordshire College"
                            schoolDescription="Match and ESOL courses"
                        />

                        <Education
                            startYear={2012}
                            endYear={2017}
                            schoolName="National Technical University of Ukraine «Kyiv Polytechnic Institute»"
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
                            startYear={2012}
                            endYear={2016}
                            jobName="Freelance Front-End Developer"
                            jobDescription="- Turn design pages and specific components into HTML, CSS, JavaScript;"
                            firstjobDescription="- Analysed UI/UX design for responsive layout for improved usability"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="Bootstrap"
                            progress={70}
                        />
                        <Skills
                            skill="WordPress"
                            progress={40}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={25}
                        />
                        <Skills
                            skill="React/Redux"
                            progress={25}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;