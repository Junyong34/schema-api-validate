import * as path from "path";
import * as fs from "fs";
import { pipe } from "../utils/pipe";
import * as TJS from "typescript-json-schema";
import { getAllFiles } from "../utils/fileFn";

interface IGenerator {
  generator: TJS.JsonSchemaGenerator;
  file: string[];
}

// src
const BASE_URL = path.resolve(__dirname, "..");
const settings: TJS.PartialArgs = {
  required: true,
};
const compilerOptions: TJS.CompilerOptions = {
  strictNullChecks: true,
};

const getFiles = () => {
  return getAllFiles(path.resolve(BASE_URL, "apiSchemaTypes"), []);
};

const makeGenerator = (file: string[]): IGenerator => {
  console.log(`🚀 file =================>`, file);
  const program = TJS.getProgramFromFiles(file, compilerOptions, BASE_URL);
  const generator = TJS.buildGenerator(program, settings);

  // console.log(TJS.buildGenerator(program, settings));
  return {
    generator: generator as TJS.JsonSchemaGenerator,
    file,
  };
};

const makeSymbols = ({ generator, file }: IGenerator) => {
  // const symbol = generator.getUserSymbols();
  // const symbolList = generator && generator.getSymbols("StudentInterface");
  // const schema = generator.getSchemaForSymbol(symbolList.name);
  const removePrefix = file.map((f) => {
    return f.replace("STD.ts", ".ts");
  });
  const filesStr = removePrefix.join(", ");
  const symbols = generator.getUserSymbols();

  // console.log(`🚀 symbols =================>`, symbols);
  // console.log(`🚀 symbols =================>`, schema);

  const schemas = symbols.filter((symbol) => {
    return !!filesStr.match(symbol);
  });
  console.log(`변환 가능한 ${schemas} 개의 파일을 찾았습니다.`);

  const schemaFolderPath = path.join(__dirname, "../schema");
  if (!fs.existsSync(schemaFolderPath)) {
    fs.mkdirSync(schemaFolderPath);
  }

  console.log("Schema 파일 변환을 시작합니다.");
  schemas.forEach((schema) => {
    const buffer = generator.getSchemaForSymbol(schema);
    const file = `export default
    ${JSON.stringify(buffer, null, 2)}
    `;

    fs.writeFileSync(path.join(schemaFolderPath, `${schema}Schema.ts`), file);
  });
  console.log("파일변환종료");
};
//
console.log("파일변환시작");
pipe(getFiles, makeGenerator, makeSymbols)();
