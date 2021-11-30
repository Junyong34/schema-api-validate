import { validate } from "../utils/validate";

export const extendJSCMatcher = (): void => {
  expect.extend({
    toMatchJSC(JSC: any, data: any) {
      const schemaValid = validate(JSC, data);

      const pass = schemaValid.valid;
      const errorText = schemaValid.errorText;

      if (pass) {
        // console.log(`🚀 pass =================>`, pass);
        return {
          pass,
          message: () => errorText,
        };
      }

      // console.log(`🚀 pass2 =================>`, pass);
      return {
        pass,
        message: () => `data must not match JSC ${errorText}`,
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
