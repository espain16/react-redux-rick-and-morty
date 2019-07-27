import {
    FETCH_CHAR_START,
    FETCH_CHAR_SUCCESS,
    FETCH_CHAR_FAILURE
} from '../actions';

//create initialState

const initialState = {
    characters: [],
    isFetching: false,
    error: ''
}

//steps to create a reducer *create a export function named rootReducer
//function is going to take two parameters, state and an action 
// create switch statement pass it an action type
export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHAR_START:
        return {
            ...state,
            isFetching: true,
            error: ''

        }
        case FETCH_CHAR_SUCCESS:
        return {
            ...state,
            isFetching: false,
            error: '',
            characters: action.payload
        }
        case FETCH_CHAR_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload
        }

        default:
            return state
    }
}