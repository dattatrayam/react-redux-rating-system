import BooksReducer from './reducer_books'

export default function (state = BooksReducer, action) {
    console.log(action.type);
    switch (action.type) {
        case 'RATE_BOOK':
            return action.payload;
    }
    return state
}