import express from 'express';
import chat from './chat.js';
import { register, login, getMe } from './auth.js';

const router = express.Router();

router.post('/chat', chat);
router.post('/register', register);
router.post('/login', login);
router.get('/user', getMe);

export default router;
