import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const Pool = pg.Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: 'ping-pong-db-svc',
  port: 5432
});

export const dbInit = async (): Promise<void> => {
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS pingpong(id SERIAL PRIMARY KEY, counter INT NOT NULL)');
    await pool.query('INSERT INTO pingpong(id, counter) VALUES(1, 0) ON CONFLICT (id) DO NOTHING');
  } catch (err) {
    console.error(err);
  }
};
void dbInit();

export default pool;