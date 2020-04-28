import { SEARCH_MOVIE } from './types';
import { SEARCH_BOOK } from './types';
import { SEARCH_GOOD } from './types';
import axios from "axios";
import { APIKey } from '../MOVIE_KEY';

export const searchMovie = number => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${number}`)
        .then(response =>
            dispatch({
                type: SEARCH_MOVIE,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};
export const searchBook = number => dispatch => {
    axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${number}`)
        .then(response =>
            dispatch({
                type: SEARCH_BOOK,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};
export const searchGood = text => dispatch => {
    dispatch({
        type: SEARCH_GOOD,
        payload: text
    })
};
