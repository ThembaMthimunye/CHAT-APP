import express from 'express';  
import { send } from 'vite';
import { sendMessage,getMessages } from '../controllers/MessageController.js';

import protectRoute from '../middleware/protectRoute.js';

const router=express.Router();


router.get('/:id',protectRoute,getMessages);
router.post('/send/:id',protectRoute,sendMessage);
export default router;