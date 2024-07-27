import mongoose from 'mongoose';
import env from './env';
import app from './app';

const port = env.PORT;

mongoose
	.connect(env.MONGODB_URI)
	.then(() => {
		console.log('Mongoose connected.');
		// start the express app
		app.listen(port, () => console.log(`Server running on port ${port}`));
	})
	.catch((err) => console.error(err));
