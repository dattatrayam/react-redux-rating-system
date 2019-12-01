import React from 'react';
import {shallow} from 'enzyme';
import BookDashCard from './../book-dashcard';

let bookDashCardComp = null;

beforeAll(()=> {
    bookDashCardComp  = shallow (<BookDashCard />);
    
})

describe("Test Cases for App Component",()=>{
    it('component is rendering',()=>{
        expect(bookDashCardComp.find('<div className="card">').exists()).toBe(true);
    })
})