import React, { Component } from 'react'
import BookDashCard from "./book-dashcard";
import { calculateBookAvgRating, compareBookRating,getRandomInt } from "./../utils/common-function"

const BookList = ({ books, rateBook }) => {
    // console.log("books:" + books);
    const sortedAvgRatingBooks = books.map(book => {
        return calculateBookAvgRating(book);
    }).sort(compareBookRating);

    return (
        <div className="header">
         {/* <button onClick={()=>startStopRandomRating(rateBook)} className="btn btn-primary">Random Rating</button> */}
        <div className="row">
            
            {sortedAvgRatingBooks.map(book => {
                return (
                    <BookDashCard bookData={book} key={book.id} rateBook ={rateBook} />
                )
            })}
        </div>
        </div>)

}

// const startStopRandomRating = (rateBook) => {
    // console.log("Start Stop random rating");
   
// }




export default BookList;
