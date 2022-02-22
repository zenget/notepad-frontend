import React, { useContext } from 'react';

import Spinner from '../layout/Spinner'
import NotepadContext from '../../context/notepadContext';
import NoteItem from './NoteItem';

const Notes = () => {
    const notepadContext = useContext(NotepadContext);

    const { loading, notes } = notepadContext;

    if (loading) {
        return <Spinner />;
    }
    return (
        <div>
            <div class="style:50%">
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>

            <div class="style:50%">
                {notes.map(note => (
                    <NoteItem key={note.id} note={note} />
                ))}
            </div>
        </div>
    );

};


export default Notes;