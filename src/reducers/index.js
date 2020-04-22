import { combineReducers } from 'redux';
import nameReducer from './nameReducer';

export default combineReducers({
    name: nameReducer
    //movies zawiera cały state z searchReducers obiekt movies

});
