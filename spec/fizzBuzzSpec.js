describe("JavaScript FizzBuzz", function() {
  let buzz;

  describe("knows when a number is", function() {
    it("divisible by 3", function() {
      buzz = new FizzBuzz();
      expect(buzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});
