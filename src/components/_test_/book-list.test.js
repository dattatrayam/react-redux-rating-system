import React from 'react';
import {shallow} from 'enzyme';
import BookList from './../book-list';

let bookListComp = null;

beforeAll(()=> {
    bookListComp  = shallow (<BookList />);
    
})

describe("Test Cases for App Component",()=>{
    it('component is rendering',()=>{
        expect(bookListComp.find('<div className="row">').exists()).toBe(true);
    })
})