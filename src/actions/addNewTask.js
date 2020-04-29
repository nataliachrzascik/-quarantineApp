import { ADD_MOVIE, ADD_BOOK, ADD_GOOD, ADD_TO_DONE, DELETE_FROM_MGB } from './types';

export const addMovie = movie => dispatch => {
    dispatch({
        type: ADD_MOVIE,
        payload: movie
    })
};
export const addBook = book => dispatch => {
    dispatch({
        type: ADD_BOOK,
        payload: book
    })
};
export const addGood = good => dispatch => {
    dispatch({
        type: ADD_GOOD,
        payload: good
    })
};


export const addToDone = task => dispatch => {
    dispatch({
        type: ADD_TO_DONE,
        payload: task
    })
};
export const deleteTask = task => dispatch => {
    dispatch({
        type: DELETE_FROM_MGB,
        payload: task
    })
};

