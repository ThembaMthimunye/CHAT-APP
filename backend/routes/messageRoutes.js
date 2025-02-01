import express from 'express';  
import { send } from 'vite';
import { sendMessage } from '../controllers/MessageController.js';
import protectRoute from '../middleware/protectRoute.js';

const router=express.Router();


router.post('/:id',protectRoute,getMessage);
router.get('/send/:id',protectRoute,sendMessage);
export default router;