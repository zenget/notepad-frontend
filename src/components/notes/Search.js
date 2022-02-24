import React, { useContext } from 'react';
import NotepadContext from '../../context/notepadContext';

import TextField from '@mui/material/TextField';

import {
    Container,
    makeStyles,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left"
    },
    textfield: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        float: 'left'
    },

}));

const Search = () => {

    const notepadContext = useContext(NotepadContext);

    const classes = useStyles();

    const onChange = e => {
        e.preventDefault();

        notepadContext.getNotes(e.target.value);

    };

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <h1>Notes List</h1>

                <TextField className={classes.textfield}
                    onChange={onChange} id="outlined-search" label="Search Note" type="search"
                />

            </div>
        </Container>
    )

};

export default Search;
