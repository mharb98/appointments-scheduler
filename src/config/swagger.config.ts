import { readdirSync, readFileSync } from 'fs';
import { resolve, join, basename } from 'path';

const schemasDir = resolve('src/docs/schema');

/**
 * Load all JSON schemas from the specified directory.
 * @returns An object containing all schemas keyed by their file names.
 */
export function loadSchemas(): Record<string, any> {
  const schemaFiles = readdirSync(schemasDir)
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      name: basename(file, '.json'),
      path: join(schemasDir, file),
    }));

  const schemas: Record<string, any> = {};
  schemaFiles.forEach(file => {
    const schemaContent = readFileSync(file.path, 'utf8');
    schemas[file.name] = JSON.parse(schemaContent);
  });

  console.log('Loaded schemas:', schemas);

  return schemas;
}


const swaggerConfig = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'Documentation for Express API with Swagger',
    },
    components: {
      schemas: loadSchemas(), 
    },
  },
  apis: ['src/api/**/*.controller.ts'], // Path to your API routes
};

export default swaggerConfig;
