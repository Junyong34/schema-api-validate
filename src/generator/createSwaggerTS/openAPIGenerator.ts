import * as path from "path";
import { generate, HttpClient } from "openapi-typescript-codegen";

const specURL = "https://turb-api.guardione.dev/swagger.json";
const outputPath = path.resolve(
  path.join(__dirname, "../..", "__apiTypesTemp2__")
);

async function swaggerModelGenerate() {
  try {
    await generate({
      input: specURL,
      output: outputPath,
      httpClient: HttpClient.FETCH,
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
