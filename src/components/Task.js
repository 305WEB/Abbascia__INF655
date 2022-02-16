import React from "react";
import PropTypes from "prop-types";


export default function Task ( {id, title, description} ) {

    return (
        <p>
            {id}
            
            {title} - {description}
     
        </p>
    );
}

Task.propTypes = {

    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,

}
