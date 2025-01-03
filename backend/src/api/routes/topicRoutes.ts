import { Router } from 'express';
import { getTopics, createTopic } from '../controllers/topicController';

const router = Router();

router.get('/', getTopics);
router.post('/', createTopic);

export default router;
