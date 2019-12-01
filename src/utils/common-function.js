export const average = arr => arr.reduce((preValue, currentValue) =>preValue+currentValue,0 )/arr.length;
export const compareBookRating = (book1, book2) => book2.average_rating - book1.average_rating;
export const calculateBookAvgRating = book =>  {
    return {
       ...book,
        average_rating: book.ratings.length > 0 ? average(book.ratings): 0
     }
};
export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
