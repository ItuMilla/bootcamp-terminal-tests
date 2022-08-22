import assert from "assert";
import greet from "../greet";

describe('The greet function', function(){

    it('It should return "Hello, Itumeleng" when Itumeleng is greeted', function(){
        equal('Hello, Itumeleng', greet('Itumeleng'));
    });

    it('It should return "Hello, Milla" when Milla is greeted', function(){
        // this test will fail - can you fix it?
        equal('Hello, Milla', greet('Milla'));
    });
    
});