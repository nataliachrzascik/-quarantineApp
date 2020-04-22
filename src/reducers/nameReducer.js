import { LOGIN } from '../actions/types';
import { LOGOUT } from '../actions/types';

const initialState = {
    name: '',
    tasksDone: [],
    movies: [],
    good: [],
    books: [],
    login: false,
    heart: undefined,
    brain: undefined,
    happy: undefined
};

//fukcja sprawdzajca typ akcji i w zaleznosci od niej wywolująca akcje

export default function (state = initialState, action) {
    switch (action.type) {
        //tu dostanie reducer z searchActions obiekt type i payload
        //sprawdzi sobie czy type = SEARCH_MOVIE jesli tak to do textu wrzuci pozyskany text z searchActions

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

        default:
            return state;
    }
}