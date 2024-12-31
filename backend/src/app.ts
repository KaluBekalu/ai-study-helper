import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router as apiRoutes } from './api';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', apiRoutes);

export default app;
