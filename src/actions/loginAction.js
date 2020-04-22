import { LOGIN } from './types';
import { LOGOUT } from './types';


export const login = name => dispatch => {
    dispatch({
        type: LOGIN,
        payload: name
    });
};
export const logout = name => dispatch => {
    dispatch({
        type: LOGOUT,
        payload: name
    });
};
