import React, { Component } from 'react';
import { Container, Button, Dimmer, Image, Segment,  Header } from 'semantic-ui-react'

 class About extends Component {
     constructor(props) {
         super(props);
         this.handleClick = this.handleClick.bind(this);
     }
    state = {};

    handleShow = () => this.setState({ active: true });
    handleHide = () => this.setState({ active: false });


     handleClick(event) {
         event.preventDefault();
         const mouseClick = event.nativeEvent.which;
         if (mouseClick === 1) {
            return window.open('https://www.google.com/');
             // Left mouse click - open in modal ...
         }
     }



    render() {
        const { active } = this.state
        const content = (
            <div>
                <Button>View</Button>
            </div>
        );

        return (
            <Container>
                <div className="ui doubling three column grid">
            <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content }}
                onMouseEnter={this.handleShow}
                onMouseLeave={this.handleHide}
                onClick={this.handleClick}
                size='medium'
                src='https://react.semantic-ui.com/images/wireframe/image.png'
            />

                <Dimmer.Dimmable
                    as={Image}
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                    onClick={this.handleClick}
                    size='medium'
                    src='https://react.semantic-ui.com/images/wireframe/image.png'
                />

                    <Dimmer.Dimmable
                        as={Image}
                        dimmed={active}
                        dimmer={{ active, content }}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                        onClick={this.handleClick}
                        size='medium'
                        src='https://react.semantic-ui.com/images/wireframe/image.png'
                    />
                </div>
            </Container>


        )
    }
}
export default About;