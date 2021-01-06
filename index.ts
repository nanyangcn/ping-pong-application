import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'))

const PORT = 3002;

let counter = 0;

app.get('/pingpong', (_req, res) => {
  res.send(`pong ${counter}`);
  counter++;
})

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
})