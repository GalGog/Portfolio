/**
 *
 * Social Link
 *
 * Renders an icon with ulr
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react'


function AboutFeature(props) {
    return <div className="column">
        <Icon.Group style={{color: '#2c3e50'}} size='huge'>
        <Icon size='big' name="circle outline" />
        <Icon name={props.iconName} style={{color: '#83a4d4'}} />
</Icon.Group>
    <span><h4>{props.h4}</h4>
        {props.span}
    </span>
    </div>

}

// We require the use of src and alt, only enforced by react in dev mode
AboutFeature.propTypes = {
    iconName: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default AboutFeature;