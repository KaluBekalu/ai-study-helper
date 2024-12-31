import { Request, Response } from 'express';
import { getAnswerFromAI } from '../../services/aiService';

export const askQuestion = async (req: Request, res: Response) => {
    try {
        const { question } = req.body;
        // const answer = await getAnswerFromAI(question);
        res.json({ answer:"Helloow" });
    } catch (error) {
        res.status(500).json({ error: 'Failed to get an answer' });
    }
};
