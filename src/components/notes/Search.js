import React, { useState, useContext } from 'react';
import NotepadContext from '../../context/notepadContext';


const Search = () => {

    const notepadContext = useContext(NotepadContext);



    const [text, setText] = useState('');


    const onSubmit = e => {
        e.preventDefault();

        notepadContext.getNotes(text);
        setText('');

    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <div>
                    <input
                        type='text'
                        name='text'
                        placeholder='Search Notes...'
                        value={text}
                        onChange={onChange}
                    />
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'
                    /></div>
            </form>

        </div>
    )

};

export default Search;
