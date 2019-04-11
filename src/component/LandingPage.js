import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | WordPress | JavaScript | React/Redux</p>

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
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
