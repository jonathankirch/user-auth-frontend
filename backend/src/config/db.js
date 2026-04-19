import mysql from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

//testar conexão
pool.getConnection()
  .then(conn => {
    console.log('Database connected...');
    conn.release();
  })
  .catch(err => console.log('[ERROR] ', err));
export default pool;