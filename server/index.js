import express from 'express';
import chat from './chat.js';
const router = express.Router();

router.post('/chat', chat);

export default router;
