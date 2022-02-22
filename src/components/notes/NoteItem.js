import React from 'react';
import PropTypes from 'prop-types'

const NoteItem = ({ note: { title, owner } }) => {

    return (
        <div className='card text-center'>

            <h3>{title}</h3>
            <h5>{owner}</h5>
        </div>
    );

};

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
}

export default NoteItem;