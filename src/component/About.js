import React, {Component} from 'react'
import { Container, Segment} from 'semantic-ui-react'
import MyLatestWork from "./MyLatestWork";

class About extends Component {
    render() {
        return (
            <Container>
                <Segment>
                    <MyLatestWork/>
                </Segment>
        </Container>
        )
    }
}
export default  About;
