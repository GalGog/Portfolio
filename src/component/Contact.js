import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() {
        return(
                <Grid>
                    <Cell Cell className="resume-left-col" col={4}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <h2>Halyna Podyman</h2>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Front End Web Developer</p>

                    </Cell>
                    <Cell className="contact-right-col" col={8}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        +44 7549 854467
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <a href="https://mail.google.com" rel="noopener noreferrer" target="_blank">
                                            <i className="fas fa-envelope-square" aria-hidden="true" />
                                            halynapodyman@gmail.com
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <a href="https://www.linkedin.com/in/halyna-podyman-7ba62514b/" rel="noopener noreferrer" target="_blank">
                                            <i className="fab fa-linkedin" aria-hidden="true" />
                                            Halyna Podyman
                                        </a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <a href="https://www.skype.com/en/" rel="noopener noreferrer" target="_blank">
                                            <i className="fab fa-skype" aria-hidden="true" />
                                            Galina Pgv
                                        </a>
                                    </ListItemContent>
                                </ListItem>


                            </List>
                        </div>
                    </Cell>
                </Grid>
        )
    }
}

export default Contact;