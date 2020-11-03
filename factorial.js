function Factorial() {}
Factorial.prototype.getFactorial = function (number) {
  let result = 1;
  for (i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
};

module.exports = Factorial;