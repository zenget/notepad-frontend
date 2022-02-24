import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Moment from 'react-moment'
import {
    Divider, makeStyles
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        padding: theme.spacing(2)
    },
    btn: {
        width: "100%", // Fix IE 11 issue.
        margin: theme.spacing(1),

    }

}));
const NoteItem = ({ note: { id, title, owner, modified_at } }) => {

    const classes = useStyles();
    return (
        <Link to={`/note/${id}`}>
            <div className={classes.paper}>

                <h3>{title}({owner})</h3>

                <Moment format='MMM Do YYYY, h:mm:ss a'>{modified_at}</Moment>
            </div>
            <Divider />
        </Link >

    );

};

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
}

export default NoteItem;