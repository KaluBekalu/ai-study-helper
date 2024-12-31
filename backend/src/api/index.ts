import { Router } from 'express';
import questionRoutes from './routes/questionRoutes';

const router = Router();

router.use('/questions', questionRoutes);

export { router };
