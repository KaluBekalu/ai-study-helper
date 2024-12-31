import { Router } from 'express';
import questionRoutes from './routes/questionRoutes';
import userRoutes from './routes/userRoutes';
import topicRoutes from './routes/topicRoutes';
import quizRoutes from './routes/quizRoutes';

const router = Router();

router.use('/questions', questionRoutes);
router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
router.use('/quizzes', quizRoutes);

export { router };
