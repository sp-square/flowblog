import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';
import env from './env';
import blogPostRoutes from './routes/blog-posts';
import usersRoutes from './routes/users';
import sessionConfig from './config/session';
import './config/passport'; // DON'T FORGET THIS IMPORT!

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(
	cors({
		origin: env.CLIENT_URL,
	})
);

// we activate sessions with the configuration we have set up for sessions in our config folder
app.use(session(sessionConfig));

// we activate passport and make it use express-sessions to store sessions in the database
app.use(passport.authenticate('session'));

app.use('/posts', blogPostRoutes);
app.use('/users', usersRoutes);

export default app;
