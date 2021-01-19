import express from 'express';
import morgan from 'morgan';
// import fs from 'fs';

import pool from './db';

const app = express();

app.use(morgan('tiny'));

const PORT = 3002;
// const PATH = './files';
let counter = 0;

// const writeFile = () => fs.writeFileSync(`${PATH}/ping-pong.txt`, `Ping / Pong: ${counter}`);
// writeFile()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/', async (_req, res) => {
  counter++;
  await pool.query(`UPDATE pingpong SET counter=${counter} WHERE id = 1`);
  res.send(`pong ${counter}`);
  // writeFile();
});

app.get('/inquire', (_req, res) => {
  res.send(`Ping / Pong: ${counter}`);
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});