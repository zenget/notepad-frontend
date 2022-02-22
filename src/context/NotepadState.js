import React, { useReducer } from 'react'
import axios from 'axios'
import NotepadContext from './notepadContext';
import NotepadReducer from './notepadReducer';
import {
    GET_NOTES,
    GET_NOTE,
    CREATE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
    SET_LOADING
} from './types';

let baseUrl = 'http://127.0.0.1:8000/api/v1/notes/';

const NotepadState = props => {
    const initialState = {
        notes: [],
        note: {},
        loading: false
    };

    const [state, dispatch] = useReducer(NotepadReducer, initialState);

    // getNotes
    const getNotes = async text => {
        setLoading();

        const res = await axios.get(
            `${baseUrl}`
        );

        dispatch({
            type: GET_NOTES,
            payload: res.data
        });
    };


    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });


    return (
        <NotepadContext.Provider
            value={{
                notes: state.notes,
                note: state.note,
                loading: state.loading,
                getNotes,
            }}
        >
            {props.children}
        </NotepadContext.Provider>
    );
};

export default NotepadState;