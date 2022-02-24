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

const notepadReducer = (state, action) => {
    const initialState = {
        notes: [],
        note: null,
        alert: null,
        loading: false
    };
    switch (action.type) {
        case GET_NOTES:

            return {
                ...state,
                notes: [...action.payload],
                loading: false
            };
        case GET_NOTE:
            return {
                ...state,
                note: { ...action.payload },
                loading: false
            };
        case CREATE_NOTE:
        case UPDATE_NOTE:
        case DELETE_NOTE: {
            return {
                ...state,
                loading: false
            };
        }
        case SET_LOADING:
            return {
                ...initialState,
                loading: true
            };
        case SET_ALERT:
            return {
                ...state,
                alert: { ...action.payload },
                loading: false
            };
        case REMOVE_ALERT:
            return {
                ...state,
                alert: null,
                loading: false
            };

        default:
            return state;
    }
};

export default notepadReducer;