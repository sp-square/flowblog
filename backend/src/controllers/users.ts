import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import UserModel from '../models/user';

interface SignUpBody {
	username: string;
	email: string;
	password: string;
}

export const signUp: RequestHandler<
	unknown,
	unknown,
	SignUpBody,
	unknown
> = async (req, res, next) => {
	const { username, email, password: passwordRaw } = req.body;

	try {
		const existingUsername = await UserModel.findOne({ username })
			.collation({
				locale: 'en',
				strength: 2,
			})
			.exec(); // .collation() allows us to compare the usernames without casing
		console.log('existingUsername', existingUsername);
		if (existingUsername) {
			throw createHttpError(409, 'Username already taken');
		}

		const passwordHashed = await bcrypt.hash(passwordRaw, 10);

		const result = await UserModel.create({
			username,
			displayName: username,
			email,
			password: passwordHashed,
		});
		// this turns the mongodb document into a plain javascript object
		const newUser = result.toObject();

		delete newUser.password;

		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
};
