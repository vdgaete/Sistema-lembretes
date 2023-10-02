/* eslint-disable linebreak-style */
import {createTable} from './controller/Tarefa.js';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();


// Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'], // files containing annotations as above
};
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);


// Json parser
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Check if the database table exists
createTable();

// Routes
import router from './routes.js';
app.use(router);

app.listen(process.env.PORT || 5000, ()=>{
  console.log(`Server Up And Running At Port ${process.env.PORT}`);
});
