import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner'
import NotepadContext from '../../context/notepadContext';
import NoteItem from './NoteItem';


import {
    Container,
    makeStyles,
    Button,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    noteItem: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    btn: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(5),

    }

}));

const Notes = () => {
    const notepadContext = useContext(NotepadContext);

    const classes = useStyles();

    const { loading, notes } = notepadContext;

    useEffect(() => {
        notepadContext.getNotes('');
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner />;
    }
    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <div className={classes.noteItem}>
                    {notes.map(note => (
                        <NoteItem
                            key={note.id} note={note} />
                    ))}

                </div>


                <Button
                    component={Link}
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                    to={`/note/`}
                >
                    New Note
                </Button>

            </div>
        </Container>
    );

};


export default Notes;