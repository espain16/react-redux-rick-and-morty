import axios from 'axios';

//three types start, success, failure
export const FETCH_CHAR_START = 'FETCH_CHAR_START';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAILURE = 'FETCH_CHAR_FAILURE';

//action is always going to be an object with two properties inside type and a payload
//  .then & .catch are resolving a promise
//dispatch
export const getCharacters = () => dispatch => {
    dispatch({type:FETCH_CHAR_START})
    axios
        .get('https://rickandmortyapi.com/api/character/?page=1')
        .then(res => dispatch({type:FETCH_CHAR_SUCCESS,payload:res.data.results}))
        .catch(err => dispatch({type:FETCH_CHAR_FAILURE,payload:err.response.data}))
}