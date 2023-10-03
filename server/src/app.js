/* eslint-disable linebreak-style */
import { createTable } from './controller/TarefaSQL.js';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from "path";
import process from "process";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Verify if the table exists, if not, create it
createTable();

// Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./server/src/routes*.js'], // files containing annotations as above
};
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

//client
app.use(express.static(path.join(__dirname, '..','public')));

// Json parser
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Routes
import router from './routes.js';
app.use(router);

//port 
const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, ()=>{
  console.log(`Server Up And Running At Port ${PORT}`);
});
