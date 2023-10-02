/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable max-len */
import {Router} from 'express';
import {insertTarefa, selectTarefa, updateTarefa, deleteTarefa, selectAllDates, selectTarefas, selectTarefasByDate} from './controller/Tarefa.js';
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Router setup
const router = Router();

//Client
router.get('/client', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });



/**
 * @openapi
 * /:
 *   get:
 *     summary: Returns a greeting message.
 *     responses:
 *       200:
 *         description: A greeting message.
 */
router.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
 * @openapi
 * /tarefa:
 *   get:
 *     summary: Returns all tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 */
router.get('/tarefa', async (req, res) => {
  const response = await selectTarefas(req, res);
  return response;
});

/**
 * @openapi
 * /tarefa/{id}:
 *   get:
 *     summary: Returns a task by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to return.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A task object.
 */
router.get('/tarefa/:id', async (req, res) => {
  const response = await selectTarefa(req, res);
  return response;
});

/**
 * @openapi
 * /tarefas/datas:
 *   get:
 *     summary: Returns all dates with tasks.
 *     responses:
 *       200:
 *         description: A list of dates with tasks.
 */
router.get('/tarefas/datas', async (req, res) => {
  const response = await selectAllDates(req, res);
  return response;
},
);

/**
 * @openapi
 * /tarefas/data/{data}:
 *   get:
 *     summary: Returns all tasks for a specific date.
 *     parameters:
 *       - in: path
 *         name: date
 *         required: true
 *         description: Date to filter tasks by.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of tasks for the specified date.
 */
router.get('/tarefas/data/:data', async (req, res) => {
  const response = await selectTarefasByDate(req, res);
  return response;
});

/**
 * @openapi
 * /tarefa:
 *   post:
 *     summary: Creates a new task.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               data:
 *                 type: string
 *     responses:
 *       200:
 *         description: The created task object.
 */
router.post('/tarefa', async (req, res) => {
  const response = await insertTarefa(req, res);
  return response;
});

/**
 * @openapi
 * /tarefa:
 *   put:
 *     summary: Updates an existing task.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               nome:
 *                 type: string
 *               data:
 *                 type: string
 *     responses:
 *       200:
 *         description: The updated task object.
 */
router.put('/tarefa', async (req, res) => {
  const response = await updateTarefa(req, res);
  return response;
});

/**
 * @openapi
 * /tarefa:
 *   delete:
 *     summary: Deletes a task.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: The deleted task object.
 */
router.delete('/tarefa', async (req, res) => {
  const response = await deleteTarefa(req, res);
  return response;
});

export default router;
