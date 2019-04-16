import React, { Component } from 'react';
import { List, Container  } from 'semantic-ui-react'



class Contact extends Component {
    render() {
        return(
                <div className="ui stackable two column grid">>
                    <div style={{padding: '1em', width:'30%', margin: 'auto'}}  className="contact-left column">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <h2>Halyna Podyman</h2>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Front End Web Developer</p>

                    </div>
                    <div style={{width:'65%', padding:'1em', margin: 'auto'}} className="contact-right column">
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List style={{padding: '1em',}}>
                                <List.Item>
                                    <List.Icon name='phone square' />
                                    <List.Content>+44 7549 854467</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='linkedin square' />
                                    <List.Content>
                                        <a href='https://www.linkedin.com/in/halyna-podyman-7ba62514b/'>Galina Pgv</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='mail' />
                                    <List.Content>
                                        <a href='mailto:halynapodyman@gmail.com'>halynapodyman@gmail.com</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='skype' />
                                    <List.Content>
                                        <a href='https://www.skype.com/en/'>Galina Pgv</a>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Contact;