import React, { Component } from 'react';
import { Container, Segment} from 'semantic-ui-react'



class LandingPage extends Component {
    render() {
        return(
            <Container>
                    <Segment className="landing-grid">
                        <img src={this.props.img} alt='avatar'/>
                        <div className="banner-text">
                            <h1>{this.props.title}</h1>
                            <p>{this.props.subtitle}</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/halyna-podyman-7ba62514b/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/GalGog" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-codepen" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Segment>
            </Container>
        )
    }
}

export default LandingPage;
