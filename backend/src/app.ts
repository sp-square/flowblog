import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import env from './env';
import blogPostRoutes from './routes/blog-posts';
import usersRoutes from './routes/users';

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(
	cors({
		origin: env.CLIENT_URL,
	})
);

app.use('/posts', blogPostRoutes);
app.use('/users', usersRoutes);

export default app;
