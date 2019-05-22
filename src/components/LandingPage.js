import React, { Component } from 'react';
import { Container, Segment} from 'semantic-ui-react'


// Components
import Img from '../components/Img';
import SocialLink from '../components/SocialLink';
import BannerText from "./BannerText/index";

class LandingPage extends Component {
    render() {
        return(
            <Container>
                    <Segment className="landing-grid">
                        <Img className="avatar-img"
                             src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                             alt='avatar'/>
                        <BannerText h1="Front End Web Developer"
                                    p="HTML/CSS | Bootstrap | WordPress | JavaScript | React/Redux"
                                    className="banner-text"
                        />
                        <SocialLink href="https://www.linkedin.com/in/halyna-podyman-7ba62514b/"
                                    iconName="fab fa-linkedin"
                                    className="social-links"

                        />
                        <SocialLink href="https://github.com/GalGog"
                                    iconName="fab fa-github"
                                    className="social-links"
                        />
                        <SocialLink href="http://google.com"
                                    iconName="fab fa-codepen"
                                    className="social-links"
                        />
                    </Segment>
            </Container>
        )
    }
}

export default LandingPage;
