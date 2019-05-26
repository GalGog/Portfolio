/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';

function BannerText(props) {
    return <div className={props.className}>
        <h1>{props.h1}</h1>
        <hr/>
        <p>{props.p}</p>
        </div>;
}

// We require the use of src and alt, only enforced by react in dev mode
BannerText.propTypes = {
    h1: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default BannerText;