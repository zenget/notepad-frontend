import {
    GET_NOTES,
    GET_NOTE,
    CREATE_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
    SET_LOADING
} from './types';

const notepadReducer = (state, action) => {

    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload,
                loading: false
            };
        case GET_NOTE:
            return {
                ...state,
                note: action.payload,
                loading: false
            };
        case CREATE_NOTE:
            return {
                ...state,
                notes: action.payload,
                loading: false
            };
        case UPDATE_NOTE: {
            return {
                ...state,
                notes: action.payload,
                loading: false
            };
        }
        case DELETE_NOTE: {
            return {
                ...state,
                notes: action.payload,
                loading: false
            };
        }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

export default notepadReducer;