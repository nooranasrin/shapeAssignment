const repeatChar = require('./utilities.js').repeatChar;
const isEven = require('./utilities.js').isEven;

const filled = function(row) {
  return repeatChar(' ',row[0]) + repeatChar('*',row[1]);
};

const alternating = function(row,index) {
  if(isEven(index)) {
    return repeatChar(' ',row[0]) + repeatChar('-',row[1]);
  }
  return repeatChar(' ',row[0]) + repeatChar('+',row[1]);
};

const hollow = function(length) {
  return function(row,index) {
    if(index == 0 || index == length - 1) {
      return repeatChar(' ',row[0]) + repeatChar('*',row[1]);
    }
    return repeatChar(' ',row[0]) + '*' +repeatChar(' ',row[1] - 2) + '*';
  };
};

const interlaced = function(row, index) {
  let symbol = ['+','-'];
  let pattern = ' '.repeat(row[0]);
  let symbolIndex = index;
  for(let count = 0; count < row[1]; count++) {
    pattern = pattern + symbol[symbolIndex % 2];
    symbolIndex++;
  }
  return pattern;
};

const angled = function (length) {
  return function(row, index) {
    if(index == 0 || index == length - 1) {
      return ' '.repeat(row[0]) + '*'.repeat(row[1]);
    }
    if(row[1] == length) {
      return ' '.repeat(row[0]) + '*' +' '.repeat(row[1] - 2) + '*';
    }
    if(index <= (length -1) /2) {
      return ' '.repeat(row[0]) + '/' +' '.repeat(row[1] - 2) + '\\';
    }
    return ' '.repeat(row[0]) + '\\' +' '.repeat(row[1] - 2) + '/';
  };
};

exports.filled = filled;
exports.alternating = alternating;
exports.hollow = hollow;
exports.interlaced = interlaced;
exports.angled = angled;
