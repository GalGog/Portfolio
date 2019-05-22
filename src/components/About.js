// Libs
import React, {Component} from 'react';
import { Container, Segment, List  } from 'semantic-ui-react'



// Components
import Skills from './Skills';
import Img from '../components/Img';
import SocialLink from '../components/SocialLink';
import BannerText from "../components/BannerText/";
import AboutFeature from "../components/AboutFeature";
import ContactMe from "../components/ContactMe";
import LatestProjects from "./LatestProjects/index";
import ContactMeForm from "./ContactMeForm/index";






class About extends Component {

    render() {
        return (
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


                    <Segment>
                    <h3 style={{textAlign:'center'}}>About</h3>
                    <div className="ui doubling four column grid">
                       <AboutFeature
                       iconName="time"
                       h4="Fast"
                       span="Fast load times and lag free interaction, my highest priority."
                       />
                        <AboutFeature
                        iconName="computer"
                        h4="Responsive"
                        span="My layouts will work on any device, big or small."
                        />
                        <AboutFeature
                            iconName="idea"
                            h4="Intuitive"
                            span="Strong preference for easy to use, intuitive UX/UI."
                        />
                        <AboutFeature
                            iconName="rocket"
                            h4="Dynamic"
                            span="Websites don't have to be static, I love making pages come to life."
                        />
                    </div>
                </Segment>
                <Segment>
                    <div className="ui doubling two column grid">
                    <div className="column">
                        <Img className="avatar-img"
                             src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                             alt='avatar'/>
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
                        <h2>My latest projects</h2>
                    <LatestProjects/>
                </Segment>
                <Segment>
                    <ContactMeForm/>

                    <div className="contact-me">
                            <ContactMe
                                iconName="phone square"
                                href="tel:+44 7549 854467"
                            />
                            <ContactMe
                                iconName="linkedin square"
                                href="https://www.linkedin.com/in/halyna-podyman-7ba62514b/"
                            />
                            <ContactMe
                                iconName="mail"
                                href="mailto:halynapodyman@gmail.com"
                            />
                            <ContactMe
                                iconName="skype"
                                href="skype:GalinaPgv/call"
                            />
                    </div>
                </Segment>
        </Container>
        )
    }
}
export default  About;
