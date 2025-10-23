import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API desafio backend ASCII  ",
      version: "1.0.0",
      description: "Documentação automática em node.js em typescript",
    },
  },
  apis: ["./src/controllers/*.ts"], 
};


const specs = swaggerJSDoc(options);

// ---------------------------------------


export function setupSwagger(app: Express): void {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  
}


export { swaggerUi, specs };

