import { validate } from "../utils/validate";

export const extendJSCMatcher = () => {
  expect.extend({
    toMatchJSC(JSC: string, data: any) {
      const schemaValid = validate(JSC, data);
      const pass = schemaValid.valid;
      const errorText = schemaValid.errorText;

      if (pass) {
        return {
          pass,
          message: () => `데이터 스키마 매칭 통과`,
        };
      }

      return {
        pass,
        message: () => `데이터 스키마 매칭 오류 ${errorText}`,
      };
    },
  });
};
export const extendToBeWithinRange = () => {
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
};
export const extendToBeOdd = () => {
  expect.extend({
    toBeOdd(received) {
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
};
