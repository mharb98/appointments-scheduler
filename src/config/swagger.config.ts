
const swaggerConfig = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
      description: 'Documentation for Express API with Swagger',
    },
  },
  apis: ['src/api/**/*.controller.ts'], // Path to your API routes
};

export default swaggerConfig;
