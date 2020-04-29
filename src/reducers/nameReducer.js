import { LOGIN, LOGOUT } from '../actions/types';
import { ADD_MOVIE, ADD_BOOK, ADD_GOOD, ADD_TO_DONE, DELETE_FROM_MGB, ADD_POINT_BOOK, ADD_POINT_GOOD, ADD_POINT_MOVIE } from '../actions/types';
import React from 'react-dom';
import { act } from 'react-dom/test-utils';


const initialState = {
    name: '',
    tasksDone: [],
    movies: [],
    goods: [],
    books: [],
    login: false,
    heart: undefined,
    brain: undefined,
    happy: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                name: action.payload,
                login: true,
                heart: 0,
                brain: 0,
                happy: 0
            };
        case LOGOUT:
            return {
                ...state,
                name: action.payload,
                login: false,
                heart: "-",
                brain: "-",
                happy: "-"
            };
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]

            };
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case ADD_GOOD:
            return {
                ...state,
                goods: [...state.goods, action.payload]
            };
        case ADD_TO_DONE:
            return {
                ...state,
                tasksDone: [...state.tasksDone, action.payload]
            };
        case DELETE_FROM_MGB:
            return {
                ...state,
                movies: [...state.movies.filter(item => item.Title !== action.payload)],
                goods: [...state.goods.filter(item => item !== action.payload)],
                books: [...state.books.filter(item => item.title !== action.payload)]
            };
        case ADD_POINT_MOVIE:
            return {
                ...state,
                happy: state.happy + 1

            };
        case ADD_POINT_BOOK:
            return {
                ...state,
                brain: state.brain + 1
            };
        case ADD_POINT_GOOD:
            return {
                ...state,
                heart: state.heart + 1
            };

        default:
            return state;
    }
}
