import React, { Fragment } from 'react'
import Note from '../notes/Note';

const NotePage = ({ match, }) => {

    let noteId = match.params.id

    return (< Fragment >

        <Note id={noteId} />

    </ Fragment>)


}
export default NotePage;