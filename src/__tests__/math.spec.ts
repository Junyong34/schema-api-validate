import math from "../utils/math";
import { extendTobeOdd } from "../jestExt";
// extendTobeOdd();

expect.extend({
  toBeOdds(received) {
    const pass = received % 2 === 1;
    if (pass) {
      return {
        message: () => `expected ${received} not to be an odd number`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received} to be an odd number`,
      pass: false,
    };
  },
});

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});
describe("타입체크", () => {
  describe("타입 테스트", () => {
    it("테스트", () => {
      expect(1).toEqual(1);
    });
    it("테스트2", () => {
      expect(true).toEqual(true);
    });
    it("add is called", () => {
      // Arrange
      const mockedAdd = jest.spyOn(math, "add");

      // Act
      const added = math.add(1, 2);

      // Assertion
      // expect(2).not.toBeOdd();
      expect(100).toBeWithinRange(90, 110);
    });
  });
});
