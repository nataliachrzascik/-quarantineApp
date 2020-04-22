import { SEARCH_MOVIE } from './types';
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