import { combineReducers } from 'redux';
import nameReducer from './nameReducer';
import newMovieReducer from './newMovieReducer';

export default combineReducers({
    name: nameReducer,
    movie: newMovieReducer
    //movies zawiera cały state z searchReducers obiekt movies

});
