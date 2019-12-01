export function rateBookAction(book) {
    console.log(book)
    return {
        type: 'RATE_BOOK',
        payload: book
    }
}