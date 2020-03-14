var assert = require('assert')
require('../script.js')
describe('Sum', function() {
  describe('just a function', function() {
    it('should return the sum of two numbers', function() {
      assert.equal(sum(1,2), 3)
    });
  });
});