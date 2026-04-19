import { getAllUsers, create } from '../models/User.js'

import bcrypt from 'bcrypt';
const saltRounds = 10;

export const getAll = async (req, res) => {
  try {
    const user = await getAllUsers()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error: err.message })
  }
}

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    await create(name, email, hashedPassword)
    res.status(201).json({message: 'Usuário criado com sucesso!'})
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar usuário',
      error: err.message
     })
  }
}
