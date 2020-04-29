import { ADD_POINT_BOOK, ADD_POINT_MOVIE, ADD_POINT_GOOD } from './types';

export const addPointMovie = () => dispatch => {
    dispatch({
        type: ADD_POINT_MOVIE
    })
};
export const addPointBook = () => dispatch => {
    dispatch({
        type: ADD_POINT_BOOK
    })
};
export const addPointGood = () => dispatch => {
    dispatch({
        type: ADD_POINT_GOOD
    })
};