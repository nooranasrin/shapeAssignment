const validInputObj = {'-s' : ['rectangle','triangle','diamond'],
                    '-p': ['filled','alternating','hollow','angled','interlaced']};

const isValidDiamension = function(diamension) {
  let newStr = diamension.split(',').join('');
  return !/\D/.test(newStr);
};

const isValidPair = function(pair) {
  if(pair[0] == '-d' && typeof(pair[1]) == 'string') {
    return isValidDiamension(pair[1]);
  }
  let validOption = Object.keys(validInputObj).includes(pair[0]);
  return validOption && validInputObj[pair[0]].includes(pair[1]);
};

const createInputObj = function(inputObj, pair) {
  inputObj[pair[0]] = pair[1];
  return inputObj;
};

const updateDefaultProperty = function(inputObj, defaultProperty) {
  let keys = Object.keys(inputObj);
  if(keys.includes(defaultProperty[0])) {
    defaultProperty[1] = inputObj[defaultProperty[0]];
  }
  return defaultProperty;
};

const getGeometricProperty = function(userInputPair) {
  let inputObj = userInputPair.reduce(createInputObj,{});
  let defaultObj = [['-s', 'rectangle'],['-p','filled'],['-d', '5,5']];
  let newProperty = defaultObj.map(updateDefaultProperty.bind(null, inputObj));
  let shapePatternDiamension = [newProperty[0][1]];
  shapePatternDiamension.push(newProperty[1][1]);
  shapePatternDiamension.push(newProperty[2][1].split(','));
  return shapePatternDiamension;
};

const isInvalidCombination = function(shape, pattern, diamension) {
  let isInvalidPattern = (pattern == 'angled' && shape != 'diamond');
  let isInvalidDiamension = (shape == 'rectangle' && diamension.length != 2);
  let isInvalidDiamond = (shape == 'diamond' &&  diamension[0] % 2 == 0);
  return isInvalidPattern || isInvalidDiamension || isInvalidDiamond;
};

exports.isValidDiamension = isValidDiamension;
exports.isValidPair = isValidPair;
exports.createInputObj = createInputObj;
exports.updateDefaultProperty = updateDefaultProperty;
exports.getGeometricProperty = getGeometricProperty;
exports.isInvalidCombination = isInvalidCombination;
