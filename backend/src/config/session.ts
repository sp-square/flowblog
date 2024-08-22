import MongoStore from 'connect-mongo';
import { SessionOptions } from 'express-session';
import env from '../env';

const sessionConfig: SessionOptions = {
	secret: env.SESSION_SECRET,
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 7 * 24 * 60 * 60 * 1000, // cookie is valid for 7 days (in milliseconds)
	},
	rolling: true, // as long as we use the website, the maxAge of the cookie will reset
	store: MongoStore.create({
		mongoUrl: env.MONGODB_URI,
	}),
};

export default sessionConfig;
