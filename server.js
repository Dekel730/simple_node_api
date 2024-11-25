import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import { errorHandler } from './middleware/errorMiddleware.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(() => {
	app.listen(PORT, () => {
		console.log(`server is running on port ${PORT}`);
	});
});

app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(errorHandler);
