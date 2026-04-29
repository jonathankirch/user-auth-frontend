import express from 'express';
const router = express.Router();
import * as userController from '../controllers/userController.js'

router.get('/all', userController.getAll);

router.post('/register', userController.createUser)

router.post('/login', userController.loginUser)

router.patch('/edit/:id', userController.editUser)


export default router;