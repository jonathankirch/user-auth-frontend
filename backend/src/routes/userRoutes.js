import express from 'express';
const router = express.Router();
import * as userController from '../controllers/userController.js'

router.get('/all', userController.getAll);

router.post('/register', userController.createUser)

export default router;