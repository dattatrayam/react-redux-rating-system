import React from 'react';
import {shallow} from 'enzyme'
import { calculateBookAvgRating, compareBookRating,getRandomInt,average } from "./../common-function"

describe("Test Cases for Common functions",()=>{
    it("Get Random Int",()=>{
        expect(getRandomInt(5)).toBeGreaterThan(0);
        expect(getRandomInt(5)).toBeLessThan(5);
    });
    it("Calculate Avg ",()=>{
        expect(average([1,2,3,4,5])).toBe(3);
    })
    

})