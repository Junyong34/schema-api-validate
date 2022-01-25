import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  maxWorkers: 3,
  // setupFilesAfterEnv: ["jest-extended/all"],
  // roots: ["<rootDir>/src"],
  setupFilesAfterEnv: [
    "jest-extended/all",
    "./src/setupJest.ts", // includes import 'jest-extended'
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      // tsConfig: "tsconfig.json",
      diagnostics: false, // 컴파일 시 에러가 있을 경우 무시하지 않고 테스트를 실패하게 하는 옵션입니다. 기본값이 false이기 때문에 true로 바꿔주었습니다.
      isolatedModules: true,
    },
  },
  testEnvironment: "node",
  // setupFilesAfterEnv: ["<rootDir>/jestSetup.js"],
};
export default config;

// Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//     roots: ["<rootDir>/src"],
//     verbose: true,
//     transform: {
//       "^.+\\.tsx?$": "ts-jest",
//     },
//     globals: {
//       "ts-jest": {
//         diagnostics: false, // 컴파일 시 에러가 있을 경우 무시하지 않고 테스트를 실패하게 하는 옵션입니다. 기본값이 false이기 때문에 true로 바꿔주었습니다.
//       },
//     },
//     // setupFilesAfterEnv: ["<rootDir>/jestSetup.js"],
//   };
// };
// module.exports = {
//   roots: ["<rootDir>/src"],
//   verbose: true,
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   globals: {
//     "ts-jest": {
//       diagnostics: false, // 컴파일 시 에러가 있을 경우 무시하지 않고 테스트를 실패하게 하는 옵션입니다. 기본값이 false이기 때문에 true로 바꿔주었습니다.
//     },
//   },
//   setupFilesAfterEnv: ["<rootDir>/jestSetup.js"],
// };
