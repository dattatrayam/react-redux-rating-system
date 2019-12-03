# **React-Redux-Rating System Demo**

This application is developed using React and Redux together. 

This project was bootstrapped with `create-react-app` and deployed live at https://react-redux-book-rating.herokuapp.com/

# Running application locally

**Prerequisites:** You need to have Node + NPM installed.

**Clone the repo:**

    git clone https://github.com/dattatrayam/react-redux-rating-system.git

**Install required dependencies:**

    npm install

**Starting the application:**

    npm start

# Building the application:

    npm run build

# Testing the App:
    npm test

# Features :
1. Display Book Dashboard as per average rating in Descending Order
2. Rate Book - User can click on "Rate Book" button to provide random rating between (1-5)
3. On rating change Book Dashboard updated as per new average rating

## UI Component Hierarchy
App is developed using Conatiner Component Pattern.

1. Book Dashboard Conatiner - It connect to redux store to get state data
2. BookListComponent - Display book data collection based on avarege user rating
3. Book Dash Card Component - Display single item of data collection with ratings, description.
 

# Future Implementation:
I want to add below things in the future version:
1. Random Rating using RxJs
2. Add more UI test cases

