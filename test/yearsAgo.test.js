import assert from 'assert';
import yearsAgo from '../yearsAgo.js';

describe('The yearsAgo Function', function() {

    it('Should return "Number required" error message if input is not a number', function() {
        assert.equal(yearsAgo('test'), 'Number required');
    });
    
});