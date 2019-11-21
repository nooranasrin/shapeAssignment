const assert = require('assert');
const isEven = require('../src/utilities.js').isEven;
const repeatChar = require('../src/utilities.js').repeatChar;

describe('testIsEven', function() {
  it('should return true for 0', function() {
    assert.ok(isEven(0));
  });
  it('should return true for all the even numbers', function() {
    assert.ok(isEven(2));
    assert.ok(isEven(-2));
  });
  it('should return false for all odd numbers', function() {
    assert.ok(!isEven(1));
    assert.ok(!isEven(-1));
  });
});

describe('testRepeatChar', function() {
  it('should give empty string when 0 times to repeat', function() {
    assert.strictEqual(repeatChar('*',0),'');
  });
  it('should give empty string when the character is an empty string', function() {
    assert.strictEqual(repeatChar('',2),'');
  });
  it('should repeat the character as specified number of times', function() {
    assert.strictEqual(repeatChar('*',2),'**');
  });
});
