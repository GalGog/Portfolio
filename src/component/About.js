import React, {Component} from 'react'
import { Container, Segment, Image } from 'semantic-ui-react'
import MyLatestWork from "./MyLatestWork";
import LandingPage from "./LandingPage";
import Skills from './Skills';

class About extends Component {
    render() {

        const src = '/images/wireframe/image.png';
        return (
            <Container>
                    <LandingPage/>

                <Segment>
                    <h1>About</h1>
                    <div className="ui doubling four column grid">
                        <div className="column">
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Fast</h4>Fast load times and lag free interaction, my highest priority.</span>
                        </div>
                        <div className="column">
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Responsive</h4>My layouts will work on any device, big or small.</span>
                        </div>
                        <div className="column">
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Intuitive</h4> Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                        <div className="column">
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Dynamic</h4>Websites don't have to be static, I love making pages come to life.</span>
                        </div>
                    </div>
                </Segment>
                <Segment>
                    <div className="ui doubling two column grid">
                    <div className="column">
                        <Image src='/images/wireframe/square-image.png' size='medium' circular />
                        <span><h4>Intuitive</h4> Strong preference for easy to use, intuitive UX/UI.</span>
                    </div>
                    <div className="column">
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
