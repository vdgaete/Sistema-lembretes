/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import {openDb} from '../configDB.js';

/**
 * Creates a new table in the database.
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {Promise<boolean>} - A promise that resolves to true if the table was created successfully, or false if an error occurred.
 */
export async function createTable(dbfile = './database.sqlite') {
  return await openDb(dbfile).then(async (db) => {
    return await db.exec(
        'CREATE TABLE IF NOT EXISTS Tarefa (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, data TEXT)',
    );
  });
}

/**
 * Verifica se a data é superior a ontem
 * @param {string} a - Data em formato "YYYY-MM-DD"
 * @param {Date} today - Data de hoje
 * @returns {boolean} - true se a data for válida, false se não for
 */
export function dateComparator(a, today) {
  const dataDate = new Date(a);
  const todayDate = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()-1));
  if (dataDate >= todayDate) {
    return true;
  } else {
    return false;
  }
}

//


/**
 * Inserts a new task into the database.
 * @param {request} req - The request object from Express.js. {@link https://expressjs.com/en/api.html#req}
 * @param {response} res - The response object from Express.js. {@link https://expressjs.com/en/api.html#res}
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {response} - The response object from Express.js.
 */
export async function insertTarefa(req, res, dbfile = './database.sqlite') {
  const {nome, data} = req.body;
  const now = new Date();
  const dataDate = new Date(data);
  const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  if (((dataDate < today))&&((dataDate.getDate() != today.getDate()) || (dataDate.getMonth() != today.getMonth()) || (dataDate.getFullYear() != today.getFullYear()))) {
    res.status(400).json({error: 'Bad request', message: 'Invalid data', today: today, data: dataDate});
    return res;
  }
  if ((!nome) || (nome=='')) {
    res.status(400).json({error: 'Bad request', message: 'Invalid name'});
    return res;
  }
  const result= await openDb(dbfile)
      .then(async (db) => {
        return await db
            .run('INSERT INTO Tarefa (nome, data) VALUES (?, ?)', [nome, data])
            .then((result) => {
              return result.lastID;
            })
            .catch((err) => {
              console.log(err);
              return false;
            });
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  if (result) {
    res.status(201).json({id: result});
  } else {
    res.status(500).json({error: 'Internal server error'});
  }
  return res;
}

/**
 * Selects all tasks from the database.
 * @param {request} req - The request object from Express.js. {@link https://expressjs.com/en/api.html#req}
 * @param {response} res - The response object from Express.js. {@link https://expressjs.com/en/api.html#res}
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {response} - The response object from Express.js.
 */
export async function selectTarefas(req, res, dbfile = './database.sqlite') {
  const tarefas = await openDb(dbfile).then(async (db) => {
    return await db.all('SELECT * FROM Tarefa', (err, rows) => {
      if (err) throw err;
      console.log(rows);
      return rows;
    });
  },
  ).catch((err) => {
    console.log(err);
    return false;
  },
  );
  if (tarefas) {
    res.status(200).json(tarefas);
  } else {
    res.status(500).json({error: 'Internal server error'});
  }
  return res;
}


/**
 * Selects a task from the database with a given ID.
 * @param {request} req - The request object from Express.js. {@link https://expressjs.com/en/api.html#req}
 * @param {response} res - The response object from Express.js. {@link https://expressjs.com/en/api.html#res}
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {response} - The response object from Express.js.
 */
export async function selectTarefa(req, res, dbfile = './database.sqlite') {
  const tarefa = await openDb(dbfile).then(async (db) => {
    return await db.get(
        'SELECT * FROM Tarefa WHERE id = ?',
        [req.params.id],
        (err, row) => {
          if (err) throw err;
          console.log(row);
          return row;
        },
    );
  }).catch((err) => {
    console.log(err);
    return false;
  });
  if (tarefa) {
    res.status(200).json(tarefa);
  } else {
    res.status(500).json({error: 'Internal server error'});
  }
  return res;
}

/**
 * Selects all tasks from the database with a given date.
 * @param {request} req - The request object from Express.js. {@link https://expressjs.com/en/api.html#req}
 * @param {response} res - The response object from Express.js. {@link https://expressjs.com/en/api.html#res}
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {response} - The response object from Express.js.
 */
export async function selectTarefasByDate(req, res, dbfile = './database.sqlite') {
  const tarefas = await openDb(dbfile).then(async (db) => {
    return await db.all(
        'SELECT * FROM Tarefa WHERE data = ?',
        [req.params.data],
        (err, rows) => {
          if (err) throw err;
          console.log(rows);
          return rows;
        },
    );
  }).catch((err) => {
    console.log(err);
    return false;
  });
  if (tarefas) {
    res.status(200).json(tarefas);
  } else {
    res.status(500).json({error: 'Internal server error'});
  }
  return res;
}


/**
 * Selects all distinct dates from the database.
 * @param {request} req - The request object from Express.js. {@link https://expressjs.com/en/api.html#req}
 * @param {response} res - The response object from Express.js. {@link https://expressjs.com/en/api.html#res}
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {response} - The response object from Express.js.
 */
export async function selectAllDates(req, res, dbfile = './database.sqlite') {
  const datas = await openDb(dbfile).then(async (db) => {
    return await db.all(
        'SELECT DISTINCT data FROM Tarefa',
        (err, rows) => {
          if (err) throw err;
          console.log(rows);
          return rows;
        },
    );
  }).catch((err) => {
    console.log(err);
    return err;
  });
  if (datas) {
    res.status(200).json(datas);
  } else if (datas.length == 0) {
    res.status(200).json([]);
  } else {
    res.status(500).json({error: 'Internal error'});
  }
}


/**
 * Updates a task in the database with a given ID.
 * @param {request} req - The request object from Express.js. {@link https://expressjs.com/en/api.html#req}
 * @param {response} res - The response object from Express.js. {@link https://expressjs.com/en/api.html#res}
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {response} - The response object from Express.js.
 */
export async function updateTarefa(req, res, dbfile = './database.sqlite') {
  const {id, nome, data} = req.body;
  const result = await openDb(dbfile).then(async (db) => {
    return await db.run(
        'UPDATE Tarefa SET nome = ?, data = ? WHERE id = ?',
        [nome, data, id],
    ).then((result) => {
      return result.changes;
    }).catch((err) => {
      console.log(err);
      return false;
    });
  }).catch((err) => {
    console.log(err);
    return false;
  });
  if (result) {
    res.status(200).json({changes: result});
  } else {
    res.status(500).json({error: 'Internal server error'});
  }
  return res;
}


/**
 * Deletes a task from the database with a given ID.
 * @param {request} req - The request object from Express.js. {@link https://expressjs.com/en/api.html#req}
 * @param {response} res - The response object from Express.js. {@link https://expressjs.com/en/api.html#res}
 * @param {string} [dbfile='./database.sqlite'] - The path to the database file.
 * @return {response} - The response object from Express.js.
 */
export async function deleteTarefa(
    req,
    res,
    dbfile = './database.sqlite',
) {
  const result = await openDb(dbfile).then(async (db) => {
    return await db.run(
        'DELETE FROM Tarefa WHERE id = ?',
        [req.body.id],
    ).then((result) => {
      return result.changes;
    }).catch((err) => {
      console.log(err);
      return false;
    });
  }).catch((err) => {
    console.log(err);
    return false;
  });
  if (result) {
    res.status(200).json({changes: result});
  } else {
    res.status(500).json({error: 'Internal server error'});
  }
  return res;
}

