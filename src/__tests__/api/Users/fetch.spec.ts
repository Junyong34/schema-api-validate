import usersITSchema from "../../../schema/usersITSchema";
import fetchUsers from "../../../api/users/users";
import { usersIT } from "../../../apiSchemaTypes/DataSearch/usersIT";
import { extendJSCMatcher, extendToBeWithinRange } from "../../../jestExt";

extendJSCMatcher();
extendToBeWithinRange();
describe("fetch Schema 테스트", () => {
  it.skip("User API JSC 를 통과한다", async () => {
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

test("numeric ranges", () => {
  expect(93).toBeWithinRange(90, 130);
  expect(101).not.toBeWithinRange(0, 100);
});
