import React from "react";
import StarRatings from "react-star-ratings";
import { getRandomInt } from "./../utils/common-function"

const BookDashCard = ({ bookData, rateBook }) => {

  return (
    <div className="col-lg-3 col-sm-3 col-md-3">
      <div className="card">
        <div className="card-body">
          <p
            className="text-sm-left card-title font-weight-bold"
            data-toggle="tooltip"
            data-placement="bottom"
            title={bookData.title}
          >
            {bookData.title}
          </p>
          <p className="text-sm-left card-text">
            No of ratings: {bookData.ratings.length}
          </p>
         
          <StarRatings
            rating={Number(bookData.average_rating)}
            starRatedColor="orange"
            numberOfStars={5}
            name='rating'
            starDimension="20px"
            starSpacing="3px"
          />
          <button
            className="btn btn-primary"
            onClick={() => rateBook({ 'id': bookData.id, 'rating': getRandomInt(5) })}
          >
            Rate Book
          </button>
        </div>
      </div>
    </div>
  );
}


export default BookDashCard;