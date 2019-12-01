const initialState = {
    books: [
        { 'id': 'B1', 'title': 'Book1', 'author': 'author1', 'ratings': [] },
        { 'id': 'B2', 'title': 'Book2', 'author': 'author1', 'ratings': [] },
        { 'id': 'B3', 'title': 'Book3', 'author': 'author1', 'ratings': [3] },
        { 'id': 'B4', 'title': 'Book4', 'author': 'author1', 'ratings': [] },
        { 'id': 'B5', 'title': 'Book5', 'author': 'author1', 'ratings': [5, 4] },
        { 'id': 'B6', 'title': 'Book6', 'author': 'author1', 'ratings': [] },
        { 'id': 'B7', 'title': 'Book7', 'author': 'author1', 'ratings': [] },
        { 'id': 'B8', 'title': 'Book8', 'author': 'author1', 'ratings': [] },
        { 'id': 'B9', 'title': 'Book9', 'author': 'author1', 'ratings': [] },
        { 'id': 'B10', 'title': 'Book10', 'author': 'author1', 'ratings': [] }

    ]
}
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RATE_BOOK':
            return {
                ...state,
                books:state.books.map(book =>
                    (book.id !== action.payload.id) ? book:
                     { ...book, ratings: [...book.ratings.slice(0,book.ratings.length),action.payload.rating] } 
                )
            }
            break;
            defualt:
            return state
    }
    return state;
}
export default bookReducer;