// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { Image} from 'semantic-ui-react';


import styledCompnLatestProjects from './styledCompnLatestProjects.css';


const Supporter = (props) => {
    const { name, img, link } = props;
    return (
        <div className="content-upp" >
            <a href={link}>
                <Image
                    src={img}
                    alt={name}
                />
            </a>
        </div>
    );
};

Supporter.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};

export default Supporter;