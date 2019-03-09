const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  port: '3307',
  user: 'user',
  password: 'password',
  connectionLimit: 5
});

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log('connected');
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

asyncFunction();