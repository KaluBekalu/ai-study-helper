import { Request, Response } from 'express';
import prisma from '../../config/db';

// Get all topics
export const getTopics = async (_req: Request, res: Response) => {
    try {
        const topics = await prisma.topic.findMany();
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch topics' });
    }
};

// Add a new topic
export const createTopic = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;

        const topic = await prisma.topic.create({
            data: { name },
        });

        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create topic' });
    }
};
