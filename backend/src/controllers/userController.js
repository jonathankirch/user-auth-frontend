import { getAllUsers, create, findUser, updateUser } from '../models/User.js'

import bcrypt from 'bcrypt'
const saltRounds = 10

export const getAll = async (req, res) => {
  try {
    const user = await getAllUsers()
    res.status(200).json(user)
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários', error: err.message })
  }
}

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    await create(name, email, hashedPassword)
    res.status(201).json({ message: 'Usuário criado com sucesso!' })
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao criar usuário', error: err.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // se não for usuario ou se a senha não for a mesma ele vai retornar um erro
    const user = await findUser(email); 
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Email ou senha inválidos!' });
    }

    res.status(200).json({ message: 'Login válido!' })
  } catch (err) {
    res.status(500).json({ message: 'Erro ao fazer login.', error: err.message })
  }
}

export const editUser = async (req, res) => {
  try {
    //  --------------
    // inicialmente vai usar o id do usuario como forma de "validar", depois irei add o jwt token para fazer este trabalho
    // no email quero tentar add uma confirmação por envio de email
    // na senha confirmar a senha atual antes
    //  --------------
    
    const { id } = req.params
    const { name, email, password } = req.body

    const fields = []
    const values = []

    if (name) {
      fields.push('name = ?')
      values.push(name)
    }

    if (email) {
      fields.push('email = ?')
      values.push(email)
    }

    if (password) {
      const hasshedPassword = await bcrypt.hash(password, saltRounds)
      fields.push('password = ?')
      values.push(hasshedPassword)
    }

    if (fields.length === 0) {
      return res.status(400).json({ message: 'Nada para atualizar.' });
    }

    values.push(id)

    await updateUser(fields, values);
    
    res.status(200).json({message: "Usuário atualizado"})
  } catch (err) {
    res.status(500).json({ message: 'Erro ao tentar editar o usuário.', error: err.message })
  }
}