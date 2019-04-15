import React, {Component} from 'react'
import { Container, Segment, Image, Icon } from 'semantic-ui-react'
import MyLatestWork from "./MyLatestWork";
import LandingPage from "./LandingPage";
import Skills from './Skills';

class About extends Component {
    render() {
        return (
            <Container>
                    <LandingPage/>

                <Segment>
                    <h3 style={{textAlign:'center'}}>About</h3>
                    <div className="ui doubling four column grid">
                        <div className="column">
                            <Icon.Group style={{color: '#2c3e50'}} size='huge'>
                                <Icon size='big' name='circle outline' />
                                <Icon name='time' style={{color: '#83a4d4'}} />
                            </Icon.Group>
                            <span><h4>Fast</h4>Fast load times and lag free interaction, my highest priority.</span>
                        </div>
                        <div className="column">
                            <Icon.Group style={{color: '#2c3e50'}} size='huge'>
                                <Icon size='big' name='circle outline' />
                                <Icon name='computer' style={{color: '#83a4d4'}} />
                            </Icon.Group>
                            <span><h4>Responsive</h4>My layouts will work on any device, big or small.</span>
                        </div>
                        <div className="column">
                            <Icon.Group style={{color: '#2c3e50'}} size='huge'>
                                <Icon size='big' name='circle outline' />
                                <Icon name='idea' style={{color: '#83a4d4'}} />
                            </Icon.Group>
                            <span><h4>Intuitive</h4> Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                        <div className="column">
                            <Icon.Group style={{color: '#2c3e50'}} size='huge'>
                                <Icon size='big' name='circle outline' />
                                <Icon name='rocket' style={{color: '#83a4d4'}} />
                            </Icon.Group>
                            <span><h4>Dynamic</h4>Websites don't have to be static, I love making pages come to life.</span>
                        </div>
                    </div>
                </Segment>
                <Segment>
                    <div className="ui doubling two column grid">
                    <div className="column">
                        <Image src='/images/wireframe/square-image.png' size='medium' circular />
                        <span><h4>Front-End Developer</h4> I'm the Front-End Developer. I have serious passion for UI effects and creating intuitive, dynamic user experiences </span>
                    </div>
                    <div className="column">
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
                            percent={40}
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
                </Segment>
                <Segment>
                    <MyLatestWork/>
                </Segment>
                <Segment>
                    <h1>Blog</h1>
                </Segment>
                <Segment>
                    <h1>Contact</h1>
                    <p>Have a question or want to work together?</p>
                </Segment>
        </Container>
        )
    }
}
export default  About;
