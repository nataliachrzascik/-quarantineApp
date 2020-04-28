import { SEARCH_BOOK } from '../actions/types';

const initialState = {
    book: []
};
//fukcja sprawdzajca typ akcji i w zaleznosci od niej wywolująca akcje
export default function (state = initialState, action) {
    switch (action.type) {
        //tu dostanie reducer z searchActions obiekt type i payload
        //sprawdzi sobie czy type = SEARCH_MOVIE jesli tak to do textu wrzuci pozyskany text z searchActions

        case SEARCH_BOOK:
            return {
                ...state,
                book: action.payload
            };

        default:
            return state;
    }
}