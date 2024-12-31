import { Request, Response } from 'express';
import prisma from '../../config/db';

// Get quizzes by topic
export const getQuizzes = async (req: Request, res: Response) => {
    try {
        const { topicId } = req.query;

        const quizzes = await prisma.quiz.findMany({
            where: { topicId: Number(topicId) },
        });

        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quizzes' });
    }
};

// Create a new quiz
export const createQuiz = async (req: Request, res: Response) => {
    try {
        const { title, questions, topicId } = req.body;

        const quiz = await prisma.quiz.create({
            data: {
                title,
                topicId,
                questions,
            },
        });

        res.status(201).json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create quiz' });
    }
};
