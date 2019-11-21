const getGeometricPattern = require('./src/expectedGeometricShapesLib.js').getGeometricPattern;

const main = function() {
  let cmdLineArg = process.argv.slice(2);
  let geometricShape = getGeometricPattern(cmdLineArg);
  console.log(geometricShape.join('\n'));
};

main();
