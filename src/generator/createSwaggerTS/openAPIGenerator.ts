import * as path from "path";
import { generate, HttpClient } from "openapi-typescript-codegen";
// import {operations} from "../../../petstore";
// import specURL from '../postman/MDM.postman_collection.json'

// const specURL = "https://payment-dev.yookgak.com/admin/docs-json";
const specURL = "./src/generator/postman/to/collection.json";
// const specURL = "../postman/to/collection2.yaml";
const outputPath = path.resolve(
  path.join(__dirname, "../..", "__apiTypesTemp2__")
);

async function swaggerModelGenerate() {
  try {
    await generate({
      input: specURL,
      output: outputPath,
      httpClient: HttpClient.AXIOS,
      exportCore: true,
      exportServices: true,
      exportModels: true,
      useOptions: true,
      useUnionTypes: true,
      exportSchemas: true,
    });
  } catch (err) {
    console.error(err);
  }
}

swaggerModelGenerate().then(() => console.log(`🚀 model 생성 완료`));

