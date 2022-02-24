
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {
    Container,
    Grid,
    makeStyles,
    Button,
    TextField,
} from "@material-ui/core";

import Spinner from '../layout/Spinner'
import NotepadContext from '../../context/notepadContext';


const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    btn: {
        margin: theme.spacing(1),

    }
}));


const Note = ({ id }) => {

    const classes = useStyles();

    const history = useHistory()

    const notepadContext = useContext(NotepadContext);
    const { loading, note, getNote } = notepadContext;

    useEffect(() => {
        if (id) {
            getNote(id)
        }

        // eslint-disable-next-line
    }, []);

    const [title, setTitle] = useState(note?.title || null);
    const [message, setMessage] = useState(note?.message || null);
    const [owner, setOwner] = useState(note?.owner || null);

    if (loading) {
        return <Spinner />;
    }

    let saveNote = async () => {

        if (id) {
            await notepadContext.updateNote({
                id: id,
                title: title || note?.title,
                message: message || note?.message,
                owner: owner || note?.owner
            })
            history.push('/')
        }
        else {
            await notepadContext.createNote({
                title: title,
                message: message,
                owner: owner
            })
            history.push('/')
        }
    }

    let deleteNote = async () => {
        await notepadContext.deleteNote(note.id)
        history.push('/')
    }
    let backToHome = async () => {
        history.push('/')
    }

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <h1>Note Detail</h1>

                <form className={classes.form} noValidate onSubmit={saveNote}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="title"
                                variant="outlined"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                autoFocus
                                value={title || note?.title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="message"
                                label="Message"
                                name="message"
                                value={message || note?.message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={3}
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="owner"
                                variant="outlined"
                                required
                                fullWidth
                                id="owner"
                                label="Owner"
                                value={owner || note?.owner}
                                onChange={(e) => setOwner(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.btn}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.btn}
                                onClick={deleteNote}
                            >
                                Delete
                            </Button>
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.btn}
                                onClick={backToHome}
                            >
                                Back
                            </Button>
                        </Grid>
                    </Grid>


                </form>
            </div>
        </Container>
    );
}

export default Note;
