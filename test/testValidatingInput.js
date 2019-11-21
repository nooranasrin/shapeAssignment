const assert = require('assert');
const validation = require('../src/validatingInputLib.js');

describe( 'testIsValidDiamension' , function() {
  it('should give true for input contains only a number',function() {
    assert.ok(validation.isValidDiamension('45'));
  });
  it('should give true for input containing group of numbers separated by comma', function() {
    assert.ok(validation.isValidDiamension('3,45'));
  });
  it('should give false for input contains -ve numbers',function() {
    assert.ok(!validation.isValidDiamension('-3,45'));
  });
  it('should give false for input cotaining alphabets or special characters', function() {
    assert.ok(!validation.isValidDiamension('-3,-45hollow'));
  });
  it('should give false for floating point numbers', function() {
    assert.ok(!validation.isValidDiamension('9.7'));
  });
});

describe('testIsValidPair', function() {
  it('Should return true if option is -d and diamension is a positive intiger', function() {
    assert.ok(validation.isValidPair(['-d','6,7']));
    assert.ok(validation.isValidPair(['-d','6']));
  });
  it('should return false if option is -d and diamension is not a positive intiger', function() {
    assert.ok(!validation.isValidPair(['-d','8hj']));
  });
  it('should return true if option is -s and shape is rectangle, triangle, or diamond', function() {
    assert.ok(validation.isValidPair(['-s','rectangle']));
    assert.ok(validation.isValidPair(['-s','triangle']));
    assert.ok(validation.isValidPair(['-s','diamond']));
  });
  it('should return false if option is -s and shape is not rectangle, triangle, or diamond', function() {
    assert.ok(!validation.isValidPair(['-s','filled']));
  });
  it('should return true if option is -p and pattern is filled,hollow,alternating,interlaced or angled', function() {
    assert.ok(validation.isValidPair(['-p','filled']));
    assert.ok(validation.isValidPair(['-p','hollow']));
    assert.ok(validation.isValidPair(['-p','alternating']));
    assert.ok(validation.isValidPair(['-p','interlaced']));
    assert.ok(validation.isValidPair(['-p','angled']));
  });
  it('should return false if option is -p and pattern is not expected', function() {
    assert.ok(!validation.isValidPair(['-p','triangle']));
  });
  it('should return false if option is not -s, -p or - d', function() {
    assert.ok(!validation.isValidPair(['-f','rectangle']));
  });
  it('should return false if second element is undefined', function() {
    assert.ok(!validation.isValidPair(['-s',undefined]));
    assert.ok(!validation.isValidPair(['-d',undefined]));
  });
});

describe('testCreateInputObj',function() {
  it('should return an empty object if array is empty', function() {
    assert.deepStrictEqual([].reduce(validation.createInputObj,{}),{});
  });
  it('should return object containing one key and one value if array contains only one element', function() {
    assert.deepStrictEqual([[1,'1']].reduce(validation.createInputObj,{}),{1:'1'});
  });
  it('should return object containing more than one keys if array contains more than one pair', function() {
    assert.deepStrictEqual([[1,'1'],[2,'2']].reduce(validation.createInputObj,{}),{1:'1',2:'2'});
  });
});

describe('testUpdateDefaultProperty', function() {
  it('should give the same array if the value is not present', function() {
    let actual = validation.updateDefaultProperty({'-s':'triangle'},['-p','filled']);
    assert.deepStrictEqual(actual,['-p','filled']);
  });
  it('should update the  array if the value is  present', function() {
    let actual = validation.updateDefaultProperty({'-d':'9,7'},['-d','rectangle']);
    assert.deepStrictEqual(actual,['-d','9,7']);
  });
  it('should give an empty array if the input is an empty array', function() {
    let actual = validation.updateDefaultProperty({'-s':'triangle'},[]);
    assert.deepStrictEqual(actual,[]);
  });
});

describe('testGetGeometricProperty', function() {
  it('should give property as specified format', function() {
    let actual = validation.getGeometricProperty([['-d','7,8']]);
    assert.deepStrictEqual(actual, ['rectangle', 'filled',['7','8']]);
  });
  it('should give default property if input is an empty array', function() {
    let actual = validation.getGeometricProperty([]);
    assert.deepStrictEqual(actual, ['rectangle', 'filled', ['5','5']]);
  });
});

describe('testIsInvalidCombination' , function() {
  it('should give true if the pattern is angled and shape is not diamond',function() {
    assert.ok(validation.isInvalidCombination('rectangle','angled',['5','5']));
  });
  it('should give true if the shape is rectangle and diamension is only row', function() {
    assert.ok(validation.isInvalidCombination('rectangle','filled',['5']));
  });
  it('should give true if shape is diamond and diamension is even', function() {
    assert.ok(validation.isInvalidCombination('diamond','filled',['8','5']));
  });
  it('should give false if the shape is rectangle and diamension contains both row and column',function() {
    assert.ok(!validation.isInvalidCombination('rectangle','filled',['5','5']));
  });
  it('should give false if the shape is diamond and pattern is angled', function() {
    assert.ok(!validation.isInvalidCombination('diamond','angled',['5','5']));
  });
  it('should give false if the shape is diamond and dimension is odd', function() {
    assert.ok(!validation.isInvalidCombination('diamond','hollow',['5','5']));
  });
});


