const assert = require('assert');
const patterns = require('../src/patternsLib.js');

describe('testFilled', function() {
  it('should give an empty string for array contains 0 as elements' , function() {
    assert.strictEqual(patterns.filled([0,0]),'');
  });
  it('should not give space for an array containing 0 as first element', function() {
    assert.strictEqual(patterns.filled([0,2]),'**');
  });
  it('should not give star for an array contains 0 as second element', function() {
    assert.strictEqual(patterns.filled([2,0]),'  ');
  });
  it('should repeat space and star for array contains first two numbers as non zero as specified times', function() {
    assert.strictEqual(patterns.filled([2,2]),'  **');
  });
});

describe('testAlternating', function() {
  it('should give an empty string for array contains 0 as elements', function() {
    assert.strictEqual(patterns.alternating([0,0],1),'');
  });
  it('should not give space for an array containing 0 as first element', function() {
    assert.strictEqual(patterns.alternating([0,2],1),'++');
  });
  it('should not give + or - for an array contains 0 as second element', function() {
    assert.strictEqual(patterns.alternating([2,0],2),'  ');
  });
  it('should repeat space and star for array contains first two numbers as non zero as specified times', function() {
    assert.strictEqual(patterns.alternating([2,2],3),'  ++');
  });
  it('should repeat - as specified times if index is even', function() {
    assert.strictEqual(patterns.alternating([0,2],2),'--');
  });
  it('should repeat + as specified times if index is odd', function() {
    assert.strictEqual(patterns.alternating([0,2],1),'++');
  }); 
});

describe('testHollow', function() {
  it('should give an  empty string for array contains 0 as elements', function() {
    let testInput = [[0,0]];
    assert.deepStrictEqual(testInput.map(patterns.hollow(testInput.length)),['']);
  });
  it('should not give space for an array containing 0 as first element', function() {
    let testInput = [[0,2]];
    assert.deepStrictEqual(testInput.map(patterns.hollow(testInput.length)),['**']);
  });
  it('should not give * for an array contains 0 as second element', function() {
    let testInput = [[2,0]];
    assert.deepStrictEqual(testInput.map(patterns.hollow(testInput.length)),['  ']);
  });
  it('should repeat space and star for array contains first two numbers as non zero as specified times', function() {
    let testInput = [[2,2]];
    assert.deepStrictEqual(testInput.map(patterns.hollow(testInput.length)),['  **']);
  });
  it('should give an hollow line if the index is not 0 or one lesser than the length of the of original array', function() {
    let testInput = [[0,1],[0,2],[0,3],[0,4]];
    assert.deepStrictEqual(testInput.map(patterns.hollow(testInput.length)),['*','**','* *','****']);
  });
  it('should not give hollow line if the index is 0 or one less than the length of original array', function() {
    let testInput = [[0,1],[0,2]];
    assert.deepStrictEqual(testInput.map(patterns.hollow(testInput.length)),['*','**']);
  });
});

describe('testInterlaced', function() {
  it('should give an empty string for array contains 0 as elements', function() {
    assert.strictEqual(patterns.interlaced([0,0],1),'');
  });
  it('should not give space for an array containing 0 as first element', function() {
    assert.strictEqual(patterns.interlaced([0,2],0),'+-');
  });
  it('should not give + and - for an array contains 0 as second element', function() {
    assert.strictEqual(patterns.interlaced([2,0],2),'  ');
  });
  it('should repeat space and + and - for array contains first two numbers as non zero as specified times', function() {
    assert.strictEqual(patterns.interlaced([2,2],3),'  -+');
  });
  it('should starts with + if index is even', function() {
    assert.strictEqual(patterns.interlaced([0,2],2),'+-');
  });
  it('should starts with - if index is odd', function() {
    assert.strictEqual(patterns.interlaced([0,2],1),'-+');
  }); 
});

describe('testAngled', function() {
  it('should give an  empty string for array contains 0 as elements', function() {
    let testInput = [[0,0]];
    assert.deepStrictEqual(testInput.map(patterns.angled(testInput.length)),['']);
  });
  it('should not give space for an array containing 0 as first element', function() {
    let testInput = [[0,2]];
    assert.deepStrictEqual(testInput.map(patterns.angled(testInput.length)),['**']);
  });
  it('should not give pattern for an array contains 0 as second element', function() {
    let testInput = [[2,0]];
    assert.deepStrictEqual(testInput.map(patterns.angled(testInput.length)),['  ']);
  });
  it('should repeat space and star for array contains first two numbers as non zero as specified times', function() {
    let testInput = [[2,2]];
    assert.deepStrictEqual(testInput.map(patterns.angled(testInput.length)),['  **']);
  });
  it('should give filled line if the index is not 0 or one lesser than the length of the of original array', function() {
    let testInput = [[0,1],[0,4]];
    assert.deepStrictEqual(testInput.map(patterns.angled(testInput.length)),['*','****']);
  });
  it('should give a hollow line if the second array element is equal to the length of original array', function() {
    let testInput = [[1,1],[0,3],[1,1]];
    assert.deepStrictEqual(testInput.map(patterns.angled(testInput.length)),[' *','* *',' *']);
  });
  it('should give an angled line if index is less than or equal to one less than half of the length of original array',function() {
    let testInput = [[2,1],[1,3],[0,5],[1,3],[2,1]];
    assert.deepStrictEqual(testInput.map(patterns.angled(testInput.length)),['  *',' / \\','*   *',' \\ /','  *']);
  });
});

