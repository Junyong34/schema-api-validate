import usersITSchema from "../../../schema/usersITSchema";

import { extendJSCMatcher } from "../../../jestExt";
import fetchUsers from "../../../api/users/users";
import { usersIT } from "../../../apiSchemaTypes/DataSearch/usersIT";

extendJSCMatcher();
describe("fetch Schema 테스트", () => {
  it("User API JSC 를 통과한다", async () => {
    // const data = await fetchUsers();
    const data: usersIT = await fetchUsers(2);
    // console.log(`🚀 data =================>`, data);

    expect(usersITSchema).toMatchJSC(data);
    // console.log(`🚀 pass =================>`, res);
    // console.log(`🚀 message =================>`, res);

    // const schemaValid = validate(overviewGraphsOrbitITSchema, data);
    //
    // const pass = schemaValid.valid;
    // const errorText = schemaValid.errorText;

    // if (pass) {
    //   console.log(`🚀 pass =================>`, pass, errorText);
    //   // return {
    //   //   pass,
    //   //   message: () => errorText,
    //   // };
    // } else {
    //   console.log(`🚀 errorText =================>`, pass, errorText);
    // }
    // return {
    //   pass,
    //   message: () => `data must not match JSC ${errorText}`,
    // };
    // expect(BinInterfaceJSC.properties).toMatchJSC(data);
  });
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

test("numeric ranges", () => {
  expect(120).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeWithinRange(1, 2),
    bananas: expect.not.toBeWithinRange(11, 20),
  });
});
