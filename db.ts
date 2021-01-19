import pg from 'pg';

const Pool = pg.Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'a5630726',
  database: 'postgres',
  host: 'ping-pong-db-svc',
  port: 5432
});

const dbInit = async () => {
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS pingpong(id SERIAL PRIMARY KEY, counter INT NOT NULL)');
    await pool.query('INSERT INTO pingpong(id, counter) VALUES(1, 0) ON CONFLICT (id) DO NOTHING');
  } catch (err) {
    console.error(err);
  }
};
void dbInit();

export default pool;