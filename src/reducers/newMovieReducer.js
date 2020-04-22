import { SEARCH_MOVIE } from '../actions/types';

const initialState = {
    movie: []
};
//fukcja sprawdzajca typ akcji i w zaleznosci od niej wywolująca akcje
export default function (state = initialState, action) {
    switch (action.type) {
        //tu dostanie reducer z searchActions obiekt type i payload
        //sprawdzi sobie czy type = SEARCH_MOVIE jesli tak to do textu wrzuci pozyskany text z searchActions

        case SEARCH_MOVIE:
            return {
                ...state,
                movie: action.payload
            };

        default:
            return state;
    }
}