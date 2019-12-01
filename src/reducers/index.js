import { combineReducers } from 'redux';
import bookReducer from './reducer_books'
import RateBookReducer from './reducer_rate_book'

const rootReducer = combineReducers({
    bookReducer
})

export default rootReducer