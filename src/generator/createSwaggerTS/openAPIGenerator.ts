import * as path from "path";
// import * as fs from "fs";
// import { promisify } from "util";
import { generate, HttpClient } from "openapi-typescript-codegen";

const specURL = "https://turb-api.guardione.dev/swagger.json";
const outputPath = path.resolve(
  path.join(__dirname, "../..", "__apiTypesTemp__")
);
// const mkdirAsync = promisify(fs.mkdir);
// const accessAsync = promisify(fs.access);
// async function makeDirectory(path: string) {
//   try {
//     await accessAsync(path);
//   } catch (err: any) {
//     if (err.code === "ENOENT") {
//       await mkdirAsync(path);
//     } else {
//       throw err;
//     }
//   }
// }
async function swaggerModelGenerate() {
  // await makeDirectory(outputPath);
  try {
    await generate({
      input: specURL,
      output: outputPath,
      httpClient: HttpClient.AXIOS,
      exportCore: false,
      exportServices: false,
      exportModels: true,
      useOptions: true,
      useUnionTypes: true,
      exportSchemas: true,
      // httpClient: OpenAPI.HttpClient.XHR,
    });
  } catch (err) {
    console.error(err);
  }
}

swaggerModelGenerate().then((r) => console.log(`🚀 model 생성 완료`));
