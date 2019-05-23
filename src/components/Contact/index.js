import React, { Component } from 'react';
import { List} from 'semantic-ui-react'

// Components
import ContactMe from "../ContactMe/index";
import Img from '../Img/index';





class Contact extends Component {
    render() {
        return(
                <div className="ui stackable two column grid">>
                    <div style={{padding: '1em', width:'30%', margin: 'auto'}}  className="contact-left column">
                        <Img className="avatar-img"
                             src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                             alt='avatar'/>
                        <h2>Halyna Podyman</h2>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Front End Web Developer</p>

                    </div>
                    <div style={{width:'65%', padding:'1em', margin: 'auto'}} className="contact-right column">
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List style={{padding: '1em',}}>
                                <ContactMe
                                    iconName="phone square"
                                    content="+44 7549 854467"
                                    href="tel:+44 7549 854467"
                                />
                                <ContactMe
                                    iconName="linkedin square"
                                    content="Galina Pgv"
                                    href="https://www.linkedin.com/in/halyna-podyman-7ba62514b/"
                                />
                                <ContactMe
                                iconName="mail"
                                content="halynapodyman@gmail.com"
                                href="mailto:halynapodyman@gmail.com"
                                />
                                <ContactMe
                                    iconName="skype"
                                    content="Galina Pgv"
                                    href="skype:GalinaPgv/call"
                                />
                            </List>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Contact;