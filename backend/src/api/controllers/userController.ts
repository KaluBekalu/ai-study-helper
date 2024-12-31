import { Request, Response } from 'express';
import prisma from '../../config/db';
import bcrypt from 'bcrypt';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};


export const updateUserProgress = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { progress } = req.body;

        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: { progress },
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user progress' });
    }
};

export const getUserProgress = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
            select: { progress: true },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user.progress);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user progress' });
    }
};


export const getUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.findUnique({
            where: { id: Number(id) },
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

