import * as fs from "fs";
import * as path from "path";

export const getAllFiles = (dirPath: string, arrayOfFiles: string[]) => {
  const files = fs.readdirSync(dirPath, {
    withFileTypes: true,
  });

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (file.isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file.name, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file.name));
    }
  });
  return arrayOfFiles;
};
