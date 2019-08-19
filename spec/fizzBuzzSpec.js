describe("JavaScript FizzBuzz", function() {
  beforeEach(function() {
    buzz = new FizzBuzz();
  });

  describe("knows when a number is", function() {
    it("divisible by 3", function() {
      expect(buzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe("knows when a number is NOT", function() {
    it("divisible by 3", function() {
      expect(buzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe("knows when a number is", function() {
    it("divisible by 5", function() {
      expect(buzz.isDivisibleByFive(5)).toBe(true);
    });
  });
  describe("knows when a number is NOT", function() {
    it("divisible by 5", function() {
      expect(buzz.isDivisibleByFive(6)).toBe(false);
    });
  });
  describe("knows when a number is", function() {
    it("divisible by 5 and 3", function() {
      expect(buzz.isDivisibleByFiveAndThree(15)).toBe(true);
    });
  });
  describe("knows when a number is NOT", function() {
    it("divisible by 5 and 3", function() {
      expect(buzz.isDivisibleByFiveAndThree(12)).toBe(false);
    });
  });
});
