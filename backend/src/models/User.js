import pool from '../config/db.js'

export const getAllUsers = async () => {
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows;
};

export const create = async (name, email, password) => {
  const [rows] = await pool.execute(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, password])
  return rows;
}
