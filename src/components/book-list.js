import React, { Component } from 'react'
import BookDashCard from "./book-dashcard";
import { calculateBookAvgRating, compareBookRating } from "./../utils/common-function"

const BookList = ({ books, rateBook }) => {
    console.log("books:" + books);
    const sortedAvgRatingBooks = books.map(book => {
        return calculateBookAvgRating(book);
    }).sort(compareBookRating);

    return (
        <div className="row">
            {sortedAvgRatingBooks.map(book => {
                return (
                    <BookDashCard bookData={book} key={book.id} rateBook />
                )
            })}
        </div>)

}

export default BookList;
