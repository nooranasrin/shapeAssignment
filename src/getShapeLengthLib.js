const getCountSpace = function(diamondSizeArray, row) {
  let spaceCount, newDiamondSize = [];
  for(let index = 0; index < diamondSizeArray.length; index++) {
    spaceCount = (row - diamondSizeArray[index]) / 2;
    newDiamondSize.push([spaceCount,diamondSizeArray[index]]);
  }
  return newDiamondSize;
};

const getTriangleSize = function(row) {
  let triangleSizeArray = [];
  for(let index = 1; index <= row; index++) {
    triangleSizeArray.push([0,index]);
  }
  return triangleSizeArray;
};

const getRectangleSize = function(row,column) {
  let rectangleSizeArray = [];
  for(let index = 1; index <= row; index++) {
    rectangleSizeArray.push([0,column]);
  }
  return rectangleSizeArray;
};

const getDiamondSize = function(row) {
  let diamondSizeArray = [];
    for(let index = 1; index <= row; index += 2) {
      diamondSizeArray.push(index);
    }
    diamondSizeArray = diamondSizeArray.concat(diamondSizeArray.slice(0,-1).reverse());
    return getCountSpace(diamondSizeArray, row);
};

exports.getTriangleSize = getTriangleSize;
exports.getRectangleSize = getRectangleSize;
exports.getDiamondSize = getDiamondSize;
exports.getCountSpace = getCountSpace;
