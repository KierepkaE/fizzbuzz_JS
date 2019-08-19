let FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};
FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0;
};
FizzBuzz.prototype.isDivisibleByFiveAndThree = function(number) {
  return number % 5 === 0 && number % 3 === 0;
};

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};
FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

FizzBuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};
