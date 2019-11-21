const assert = require('assert');
const getPair = require('../src/expectedGeometricShapesLib.js').getPair;
const getShapeSize = require('../src/expectedGeometricShapesLib.js').getShapeSize;
const getPattern = require('../src/expectedGeometricShapesLib.js').getPattern;
const getGeometricPattern = require('../src/expectedGeometricShapesLib.js').getGeometricPattern;

describe("testGetPair" ,function() {
  it("should return pairs for array conataining even number of elements" , function() {
    assert.deepStrictEqual(getPair([1,2,3,4]),[[1,2],[3,4]]);
  });
  it('should return an empty array for empty array as input', function() {
    assert.deepStrictEqual(getPair([]),[]);
  });
  it('should return undefined for last element of last pair if array containing odd number of elements', function() {
    assert.deepStrictEqual(getPair([1]),[[1,undefined]]);
  });
});

describe('testGetShapeSize', function() {
  it('should return rectangle size if shape is rectangle', function() {
    assert.deepStrictEqual(getShapeSize('rectangle','3','3'),[[0,3],[0,3],[0,3]]);
  });
  it('should return triangle size if shape is triangle', function() {
    assert.deepStrictEqual(getShapeSize('triangle','5','2'),[[0,1],[0,2],[0,3],[0,4],[0,5]]);
  });
  it('should retur diamond size if shape is diamond', function() {
    assert.deepStrictEqual(getShapeSize('diamond','5','2'),[[2,1],[1,3],[0,5],[1,3],[2,1]]);
  });
});

describe('testGetPattern', function() {
  it('should return filled pattern for the specific shape if pattern is filled', function() {
    assert.deepStrictEqual(getPattern('filled',[[0,3]]),['***']);
  });
  it('should return alternating pattern for the specific shape if pattern is alternating', function() {
    assert.deepStrictEqual(getPattern('alternating',[[0,1],[0,2]]),['-','++']);
  });
  it('should return interlaced pattern for the specific shape if pattern is interlaced', function() {
    assert.deepStrictEqual(getPattern('interlaced',[[0,1],[0,2]]),['+','-+']);
  });
  it('should return hollow pattern for the specific shape if pattern is hollow', function() {
    assert.deepStrictEqual(getPattern('hollow',[[0,1],[0,2],[0,3],[0,4]]),['*','**','* *','****']);
  });
  it('should return angled pattern for the specific shape if pattern is angled', function() {
    assert.deepStrictEqual(getPattern('angled',[[2,1],[1,3],[0,5],[1,3],[2,1]]),['  *',' / \\','*   *',' \\ /','  *']);
  }); 
});

describe('testGetGeometricPattern', function() {
  it('should return an empty array if the input is not valid ', function() {
    assert.deepStrictEqual(getGeometricPattern(['-s']),[]);
  });
   it('should return an empty array if the input combination is not valid ', function() {
     assert.deepStrictEqual(getGeometricPattern(['-s','rectangle','-p','angled']),[]);
   });
  it('should return the expected geometry if the input is valid', function() {
    assert.deepStrictEqual(getGeometricPattern([]),['*****','*****','*****','*****','*****']);
  });
});
