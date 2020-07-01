import React, { Component } from 'react';
import { Container, Segment} from 'semantic-ui-react'


//Import utils
import Img from '../Img/index';
import SocialLink from '../SocialLink/index';
import BannerText from "../BannerText/index";
import logo from "../../assets/images/logo.jpg";

class LandingPage extends Component {
    render() {
        return(
            <Container>
                    <Segment className="landing-grid">
                        <Img className="avatar-img"
                             src={logo} width="100" height="50" alt="photo"/>
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
