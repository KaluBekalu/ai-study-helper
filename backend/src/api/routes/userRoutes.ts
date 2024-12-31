

import { Router } from 'express';
import { updateUserProgress, createUser, getUser, getUserProgress } from '../controllers/userController';

const router = Router();

router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUserProgress);


export default router;
