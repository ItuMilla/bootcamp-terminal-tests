import assert from "assert";
import isWeekday from "../isWeekday.js";


describe('isWeekday function', function() {
    // Expected
    it('Should return True if valid day of the week is passed as input', function() {
        var day = 'Friday';
        assert.equal(isWeekday(day), true);
    });
    
    it('Should return true if entered day is all lower case letters', function() {
        var day = 'friday';
        assert.equal(isWeekday(day), false);
    });
    
})