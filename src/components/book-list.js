import React, { Component } from 'react'
import BookDashCard from "./book-dashcard";
import { calculateBookAvgRating, compareBookRating, getRandomInt } from "./../utils/common-function"

const BookList = ({ books, rateBook }) => {
    const sortedAvgRatingBooks = books.map(book => {
        return calculateBookAvgRating(book);
    }).sort(compareBookRating);

    return (
        <div className="header">
            <div className="row">

                {sortedAvgRatingBooks.map(book => {
                    return (
                        <BookDashCard bookData={book} key={book.id} rateBook={rateBook} />
                    )
                })}
            </div>
        </div>)

}

export default BookList;
