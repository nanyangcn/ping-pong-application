import express from 'express';
import morgan from 'morgan';
import fs from 'fs';

const app = express();

app.use(morgan('tiny'));

const PORT = 3001;
const PATH = './files';
let counter = 0;

app.get('/', (_req, res) => {
  counter++;
  res.send(`pong ${counter}`);
  fs.writeFileSync(`${PATH}/ping-pong.txt`, `Ping / Pong: ${counter}`);
});

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});