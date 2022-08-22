import assert from "assert";
import greet from "../isFromBellville.js";

describe('The isFromBellville function', function() {
   
   
    it('Should return TRUE if reg starts with CY', function() {
       var reg = 'CY 123';
       assert.equal(isFromBellville(reg), true);
    });
 
    //Error path
    it('Should return false if Reg does not start with CY', function() {
       var reg = 'CA 123';
       assert.equal(isFromBellville(reg), false);
    });
    
    it('Should return TRUE if reg starts with "Cy" as mixed cases.', function() {
       var reg = 'Cy 123';
       assert.equal(isFromBellville(reg), true);
    });
 
 });