/**
 *
 * Social Link
 *
 * Renders an icon with ulr
 */

import React from 'react';
import PropTypes from 'prop-types';

function SocialLink(props) {
    return <a className={props.className} href={props.href}  alt={props.alt} rel="noopener noreferrer" target="_blank" >
        <i className={props.iconName} aria-hidden="true" />
        </a>

}

// We require the use of src and alt, only enforced by react in dev mode
SocialLink.propTypes = {
    href: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default SocialLink;