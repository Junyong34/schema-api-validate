// import axios from "axios";
import BinInterfaceJSC from "../schema/exampleITSchema";
import { validate } from "../utils/validate";
// import { extendJSCMatcher } from "../jestExtend";
// extendJSCMatcher();
describe("Ajax", () => {
  it("데이터가 JSC 를 통과한다", (done) => {
    // const res = await axios.get("https://httpbin.org/get");
    // const { data } = res;

    // const data = {
    //   name: "jun",
    //   age: 11,
    //   sex: "male",
    //   friend: ["d", "a", "c"],
    //   class: "FE",
    // };

    const data = {
      name: "jun",
      age: 11,
      friend: ["d", "a", "c"],
      class: "FE",
    };

    // console.log(data);
    const schemaValid = validate(BinInterfaceJSC, data);

    const pass = schemaValid.valid;
    const errorText = schemaValid.errorText;

    if (pass) {
      console.log(`🚀 pass =================>`, pass, errorText);
      // return {
      //   pass,
      //   message: () => errorText,
      // };
    } else {
      console.log(`🚀 errorText =================>`, pass, errorText);
    }
    // return {
    //   pass,
    //   message: () => `data must not match JSC ${errorText}`,
    // };
    // expect(BinInterfaceJSC.properties).toMatchJSC(data);
    done();
  });
});
