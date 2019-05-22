import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import {Progress } from 'semantic-ui-react'


class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>{this.props.skill} <Progress  style={{margin: 'auto', width: '75%' }}  percent={this.props.percent} progress />  </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;