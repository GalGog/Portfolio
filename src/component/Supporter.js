// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import {Image} from 'semantic-ui-react'

import { SupporterWrapper } from './styledComponents';

const Supporter = (props) => {
    const { name, img } = props;
    return (
        <SupporterWrapper>
            <Link
                to={{
                    pathname: `/supporters/${name}`,
                    state: { supporter: props },
                }}
            >
                <Image
                    src={img}
                    alt={name}
                    className={'img-responsive'}
                />
            </Link>
        </SupporterWrapper>
    );
};

Supporter.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default Supporter;