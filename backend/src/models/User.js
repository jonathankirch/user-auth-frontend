import pool from '../config/db.js'

export const getAllUsers = async () => {
  const [rows] = await pool.execute('SELECT * FROM users');
  return rows;
};

export const findUser = async (email) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email])
  return rows[0];
}

export const create = async (name, email, password) => {
  const [rows] = await pool.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password])
  return rows;
}

export const updateUser = async (fields, values) => {
  const [rows] = await pool.execute(
      `UPDATE users SET ${fields.join(', ')} WHERE id = ?`,
      values
    );
}
