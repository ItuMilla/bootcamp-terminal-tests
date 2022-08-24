import assert from 'assert';
import mostProfitableDepartment from '../mostProfitableDepartment.js';

describe('The mostProfitableDepartment Function', function() {
    it('mostProfitableDepartment should return hardware as the most profitable department', function() {
        var itemList = [{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"},]
        assert.equal(mostProfitableDepartment(itemList), "hardware");
    });

    it('It should return false when an invalid data is provided as input', function() {
        var itemList = '@#$$%%^'
        assert.equal(mostProfitableDepartment(itemList), false);
    });

});