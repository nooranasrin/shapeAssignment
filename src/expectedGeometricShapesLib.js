const shapeSize = require('../src/getShapeLengthLib.js');
const validation = require('./validatingInputLib.js');
const pattern = require('../src/patternsLib.js');
const shapesAndReferenceObj = {'rectangle' : shapeSize.getRectangleSize,
                                'triangle' : shapeSize.getTriangleSize,
                                'diamond' : shapeSize.getDiamondSize};
const patternAndReferenceObj = {'filled' : pattern.filled,
                                'alternating' : pattern.alternating,
                                'hollow' : pattern.hollow,
                                'interlaced' : pattern.interlaced,
                                'angled' : pattern.angled};

const getShapeSize = function(shape, row, column) {
  let size = shapesAndReferenceObj[shape](+row,+column);
   return size;
};

const getPair = function(cmdLineArg) {
  let pairs = [];
  for(let index = 0;index <= cmdLineArg.length - 1; index += 2) {
    pairs.push([cmdLineArg[index],cmdLineArg[index + 1]]);
  }
  return pairs;
};

const getPattern = function(pattern, size) {
  if(pattern == 'hollow' || pattern == 'angled') {
    return size.map(patternAndReferenceObj[pattern](size.length));
  }
  return size.map(patternAndReferenceObj[pattern]);
};

const getGeometricPattern = function(cmdLineArg) {
  let pairs = getPair(cmdLineArg);
  let isValidInput = pairs.every(validation.isValidPair);
  let geometry = validation.getGeometricProperty(pairs);
  let isInValidCombination = validation.isInvalidCombination(geometry[0],geometry[1],geometry[2]);
  if(isValidInput && !isInValidCombination) {
    let shapeSize = getShapeSize(geometry[0],geometry[2][0],geometry[2][1]);
    return getPattern(geometry[1],shapeSize)
  }
  return [];
};

exports.getPair = getPair;
exports.getShapeSize = getShapeSize;
exports.getPattern = getPattern;
exports.getGeometricPattern = getGeometricPattern;
