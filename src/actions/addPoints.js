import { ADD_POINT_BOOK, ADD_POINT_MOVIE, ADD_POINT_GOOD, ANIMATE_ICON_HEART, ANIMATE_ICON_BRAIN, ANIMATE_ICON_SMILE } from './types';

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

export const animateIconHeart = () => dispatch => {
    dispatch({
        type: ANIMATE_ICON_HEART
    })
};
export const animateIconBrain = () => dispatch => {
    dispatch({
        type: ANIMATE_ICON_BRAIN
    })
};
export const animateIconSmile = () => dispatch => {
    dispatch({
        type: ANIMATE_ICON_SMILE
    })
};