import React, {Component} from 'react'
import { Container, Segment, Image, Divider } from 'semantic-ui-react'
import MyLatestWork from "./MyLatestWork";
import LandingPage from "./LandingPage";

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
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Intuitive</h4> Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                        <div className="column">
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Intuitive</h4> Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                        <div className="column">
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Intuitive</h4> Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                        <div className="column">
                            <Image src={src} size='small' verticalAlign='underneath' /> <span><h4>Intuitive</h4> Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                    </div>
                </Segment>

                <Segment>
                    <MyLatestWork/>
                </Segment>
        </Container>
        )
    }
}
export default  About;
