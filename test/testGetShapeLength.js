const assert = require('assert');
const getShapeSizeFunc = require('../src/getShapeLengthLib.js');

describe('testGetTriangleSize' , function() {
  it('should return the size of triangle as expected for input greater than one', function() {
    assert.deepStrictEqual(getShapeSizeFunc.getTriangleSize(3),[[0,1],[0,2],[0,3]]);
  });
  it('should return an empty array for 0 as input ', function() {
    assert.deepStrictEqual(getShapeSizeFunc.getTriangleSize(0),[]);
  });
});

describe( 'testGetRectangleSize' , function() {
  it('should return the size of triangle as expected for input greater than 0', function() {
    assert. deepStrictEqual(getShapeSizeFunc.getRectangleSize(3,9),[[0,9],[0,9],[0,9]]);
  });
  it('should return an empty array for row as 0', function() {
    assert.deepStrictEqual(getShapeSizeFunc.getRectangleSize(0,9),[]);
  });
  it('should return the size for column as 0', function() {
    assert.deepStrictEqual(getShapeSizeFunc.getRectangleSize(3,0),[[0,0],[0,0],[0,0]]);
  });
}); 

describe( 'testGetContSpace' , function() {
  it('should return the given array with spaces', function() {
    assert.deepStrictEqual(getShapeSizeFunc.getCountSpace([1,3,5,7,5,3,1],7),[[3,1],[2,3],[1,5],[0,7],[1,5],[2,3],[3,1]]);
    assert.deepStrictEqual(getShapeSizeFunc.getCountSpace([1,3,5,3,1],5),[[2,1],[1,3],[0,5],[1,3],[2,1]]);
  });
});

describe( 'testGetDiamondSize' , function() {
  it('should return the size of diamond as expected for input greater than 0', function() {
    assert.deepStrictEqual(getShapeSizeFunc.getDiamondSize(5),[[2,1],[1,3],[0,5],[1,3],[2,1]]);
  });
  it('should return an empty array for row as 0', function() {
    assert.deepStrictEqual(getShapeSizeFunc.getDiamondSize(0),[]);
  });
});

