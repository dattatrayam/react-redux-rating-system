import React from 'react';
import {shallow} from 'enzyme'
import bookReducer from "./../reducer_books"

const initialState = {
    books: [
        { 'id': 'B1', 'title': 'Book1', 'author': 'author1', 'ratings': [] },
        { 'id': 'B2', 'title': 'Book2', 'author': 'author1', 'ratings': [] },
        { 'id': 'B3', 'title': 'Book3', 'author': 'author1', 'ratings': [3] },
    ]
}

describe("Test Cases for Book Reducer",()=>{
    it("Test Intial State",()=>{
        
        expect(bookReducer(initialState,{'type':'TEST'}).books.length).toBe(3);
        expect(bookReducer(initialState,{'type':'RATE_BOOK','payload':{'id':'B1','rating':4}}).books[0].ratings.length).toBe(1);

    });

    it("Test State after RATE BOOK Actionn",()=>{
        
       expect(bookReducer(initialState,{'type':'RATE_BOOK','payload':{'id':'B1','rating':4}}).books[0].ratings.length).toBe(1);
       expect(bookReducer(initialState,{'type':'RATE_BOOK','payload':{'id':'B3','rating':4}}).books[2].ratings.length).toBe(2);

    });
    
})