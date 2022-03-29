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
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from './types';

let baseUrl = 'http://127.0.0.1:8001/api/v1/notes';

const NotepadState = props => {
    const initialState = {
        notes: [],
        note: null,
        alert: null,
        loading: false
    };

    const [state, dispatch] = useReducer(NotepadReducer, initialState);

    // getNotes
    const getNotes = async text => {
        setLoading();
        try {
            const res = await axios.get(
                `${baseUrl}/?searchKey=${text}`
            );

            dispatch({
                type: GET_NOTES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: SET_ALERT,
                payload: { type: 'error', message: err.message || err.response?.data }
            })
            setTimeout(() => dispatch({
                type: REMOVE_ALERT
            }), 5000);
        }

    };

    // getNote
    const getNote = async id => {

        setLoading();

        try {
            const res = await axios.get(
                `${baseUrl}/${id}/`
            );

            dispatch({
                type: GET_NOTE,
                payload: res.data
            });
        } catch (err) {
            debugger
            dispatch({
                type: SET_ALERT,
                payload: { type: 'error', message: err.message || err.response?.data }
            })
            setTimeout(() => {
                return dispatch({
                    type: REMOVE_ALERT
                });
            }, 5000);
        }
    };


    // createNote
    const createNote = async payload => {
        setLoading();
        try {
            const res = await axios.post(
                `${baseUrl}/`, payload
            );

            dispatch({
                type: CREATE_NOTE,
                payload: res.data
            });
            dispatch({
                type: SET_ALERT,
                payload: { type: 'success', message: 'Successfully Created' }
            })
        } catch (err) {
            debugger
            dispatch({
                type: SET_ALERT,
                payload: { type: 'error', message: err.message || err.response?.data }
            })
            setTimeout(() => {
                return dispatch({
                    type: REMOVE_ALERT
                });
            }, 5000);
        }
    };
    // updateNote
    const updateNote = async payload => {
        setLoading();
        try {
            const res = await axios.put(
                `${baseUrl}/${payload.id}/`, payload
            );

            dispatch({
                type: UPDATE_NOTE,
                payload: res.data
            });
            dispatch({
                type: SET_ALERT,
                payload: { type: 'success', message: 'Successfully Updated' }
            })
        } catch (err) {
            dispatch({
                type: SET_ALERT,
                payload: { type: 'error', message: err.message || err.response?.data }
            })
            setTimeout(() => dispatch({
                type: REMOVE_ALERT
            }), 5000);
        }
    };
    // deleteNote
    const deleteNote = async id => {
        setLoading();

        try {
            const res = await axios.delete(
                `${baseUrl}/${id}/`
            );

            dispatch({
                type: DELETE_NOTE,
                payload: res.data
            });
            dispatch({
                type: SET_ALERT,
                payload: { type: 'success', message: 'Successfully Deleted' }
            })
        } catch (err) {
            dispatch({
                type: SET_ALERT,
                payload: { type: 'error', message: err.message || err.response?.data }
            })
            setTimeout(() => dispatch({
                type: REMOVE_ALERT
            }), 5000);
        }
    };
    const setAlert = (msg, type) => {

        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });
        setTimeout(() => dispatch({
            type: REMOVE_ALERT
        }), 5000);
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });


    return (
        <NotepadContext.Provider
            value={{
                notes: state.notes,
                note: state.note,
                loading: state.loading,
                alert: state.alert,
                getNotes,
                getNote,
                createNote,
                updateNote,
                deleteNote,
                setAlert
            }}
        >
            {props.children}
        </NotepadContext.Provider>
    );
};

export default NotepadState;