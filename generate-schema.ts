import { resolve, join, basename } from 'path';
import { writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { getProgramFromFiles, generateSchema, PartialArgs, CompilerOptions } from 'typescript-json-schema';

// Recursively find all .dto.ts files in the src directory
const findDTOFiles = (dir: string): string[] => {
  let files: string[] = [];
  readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      files = files.concat(findDTOFiles(res));
    } else if (dirent.isFile() && res.endsWith('.dto.ts')) {
      files.push(res);
    }
  });
  return files;
};

const dtoFiles = findDTOFiles(resolve('src'));

const settings: PartialArgs = {
  required: true,
};

const compilerOptions: CompilerOptions = {
  strictNullChecks: true,
  target: 2, // ES6
  module: 6  // ES6
};

const schemasDir = resolve('src/docs/schema');
if (!existsSync(schemasDir)) {
  mkdirSync(schemasDir, { recursive: true });
}

dtoFiles.forEach(file => {
  const program = getProgramFromFiles([file], compilerOptions);
  const schema = generateSchema(program, '*', settings);

  if (schema) {
    const outputPath = join(schemasDir, `${basename(file, '.ts')}.json`);
    writeFileSync(outputPath, JSON.stringify(schema, null, 2));
  }
});

console.log(`Generated schemas for ${dtoFiles.length} DTO files.`);
