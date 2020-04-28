import { SEARCH_GOOD } from '../actions/types';

const initialState = {
    good: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_GOOD:
            return {
                ...state,
                good: action.payload
            };

        default:
            return state;
    }
}