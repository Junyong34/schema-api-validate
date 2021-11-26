import Ajv, { JSONSchemaType } from "ajv";
export const validate = (JSC: any, data: any) => {
  const ajv = new Ajv({ allErrors: true });
  const valid = ajv.validate(JSC, data);
  const errorText =
    ajv.errorsText() && ajv.errorsText().toLocaleLowerCase() !== "no errors"
      ? ajv.errorsText()
      : "";

  return {
    errorText,
    valid: !!valid,
  };
};
// interface MyData {
//   foo: number;
//   bar?: string;
// }
// const ajv = new Ajv({ allErrors: true });
// const schema: JSONSchemaType<MyData> = {
//   type: "object",
//   properties: {
//     foo: { type: "integer" },
//     bar: { type: "string", nullable: true },
//   },
//   required: ["foo"],
//   additionalProperties: false,
// };
//
// // validate is a type guard for MyData - type is inferred from schema type
// const validate = ajv.compile(schema);
// // console.log(`🚀 validate =================>`, validate);
// // or, if you did not use type annotation for the schema,
// // type parameter can be used to make it type guard:
// // const validate = ajv.compile<MyData>(schema)
//
// const data = {
//   foo: 1,
//   bar: "abc",
// };
//
// if (validate(data)) {
//   // data is MyData here
//   console.log(data.foo);
// } else {
//   console.log(validate.errors);
// }
//
