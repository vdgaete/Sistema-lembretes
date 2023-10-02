import path from "path";
import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express(); // create express app

// add middlewares
app.use(express.static(path.join("..", "dist")));

app.get('/', (req, res) => {
    res.send('Hello World!')
}
);

app.get('/client', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

// start express server on port 5000
app.listen(process.env.PORT || 5000
    , () => {
  console.log("server started on port 5000");
});