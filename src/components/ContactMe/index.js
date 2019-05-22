/**
 *
 * Social Link
 *
 * Renders an icon with ulr
 */

import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react'


function ContactMe(props) {
    return <List.Item>
        <List.Icon name={props.iconName} />
        <List.Content><a target="_blank" href={props.href}>{props.content}</a>
        </List.Content>
</List.Item>

}

// We require the use of src and alt, only enforced by react in dev mode
ContactMe.propTypes = {
    href: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    number: PropTypes.string,
};

export default ContactMe;