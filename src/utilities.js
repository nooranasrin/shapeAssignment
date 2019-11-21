const isEven = function(number) {
  return number % 2 == 0;
};

const repeatChar = function(character, times) {
  return character.repeat(times);
};

exports.isEven = isEven;
exports.repeatChar = repeatChar;
