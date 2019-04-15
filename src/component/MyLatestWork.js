import React, { Component } from 'react';
import { Container, Button, Dimmer, Image,   Header } from 'semantic-ui-react'

import LatestWorkCard from './LatestWorkCard';

class MyLatestWork extends Component {
    render(){
        return (
            <Container>

                <Header><h1>My Latest Work</h1>
                    <h3>Take a look at some of my recent projects</h3>
                </Header>
                <div className="ui doubling three column grid">
                </div>
                <LatestWorkCard/>
                <LatestWorkCard/>
            </Container>
        )
    }
}
export  default MyLatestWork;