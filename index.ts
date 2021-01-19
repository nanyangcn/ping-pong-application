import express from 'express';
import morgan from 'morgan';

import pool from './db';
import { parseRows } from './utils';

const app = express();

app.use(morgan('tiny'));

const PORT = 3002;

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/', async (_req, res) => {
  try {
    const response = await pool.query('SELECT counter FROM pingpong WHERE id = 1');
    const rows = parseRows(response.rows);
    if (!rows[0]) throw new Error('rows is empty');
    const counter = rows[0].counter;
    await pool.query(`UPDATE pingpong SET counter=${counter + 1} WHERE id = 1`);
    res.send(`pong ${counter + 1}`);
  } catch (err) {
    console.error(err);
  }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/inquire', async (_req, res) => {
  try {
    const response = await pool.query('SELECT counter FROM pingpong WHERE id = 1');
    const rows = parseRows(response.rows);
    if (!rows[0]) throw new Error('rows is empty');
      const counter = rows[0].counter;
    res.send(`Ping / Pong: ${counter}`);
  } catch (err) {
    console.error(err);
  }  
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});