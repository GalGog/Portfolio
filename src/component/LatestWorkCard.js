import React, { Component } from 'react';
import { Button, Dimmer, Image} from 'semantic-ui-react'

 class LatestWorkCard extends Component {
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
         } else if (mouseClick === 2) {
             return window.open('https://www.youtube.com');
         }
     }




    render() {
        const { active } = this.state
        const content = (
            <div>
                <Button>View Site</Button>
            </div>
        );

        return (
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

        )
    }
}
export default LatestWorkCard;