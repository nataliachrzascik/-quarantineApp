import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import newMovieReducer from './newMovieReducer';
import newBookReducer from './newBookReducer';
import newGoodReducer from './newGoodReducer';

export default combineReducers({
    name: nameReducer,
    movie: newMovieReducer,
    book: newBookReducer,
    good: newGoodReducer

});
