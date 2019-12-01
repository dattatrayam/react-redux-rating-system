import React from 'react';
import {shallow} from 'enzyme';
import App from './../App';

let appComp = null;

beforeAll(()=> {
 appComp  = shallow (<App />);
    
})

describe("Test Cases for App Component",()=>{
    it('component is rendering',()=>{
        expect(appComp.find('<h3>Book Rating System</h3>').exists()).toBe(true);
    })
})