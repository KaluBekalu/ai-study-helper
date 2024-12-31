import { Router } from 'express';
import { getQuizzes, createQuiz } from '../controllers/quizController';

const router = Router();

router.get('/', getQuizzes);
router.post('/', createQuiz);

export default router;
