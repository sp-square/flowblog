import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import UserModel from '../models/user';

// for flow from backend to frontend (upon the user logging in or signing up)
passport.serializeUser((user, cb) => {
	return cb(null, user._id); // we store the user _id in the session in the db, and a cookie that is stored on the frontend
});

// for flow from frontend to backend (upon receiving a cookie from the frontend - the cookie contains the userId)
passport.deserializeUser((userId: string, cb) => {
	return cb(null, { _id: new mongoose.Types.ObjectId(userId) }); // we want to turn the string back into a mongodb id in order to fetch the user's data
});

passport.use(
	new LocalStrategy(async (username, password, cb) => {
		try {
			const existingUser = await UserModel.findOne({ username })
				.collation({
					locale: 'en',
					strength: 2,
				})
				.select('+email +password')
				.exec();

			// if there is no user with this username or there is no password for this user (the user is using another login strategy)
			if (!existingUser || !existingUser.password) {
				return cb(null, false); // we pass 'null' for the error (b/c this is not an error) and 'false' (b/c either no user was found or there wasn't a pw
				// this will return a 401 response letting the user know that they used invalid credentials
			}

			// validate the password provided by the user
			const passwordMatch = await bcrypt.compare(
				password,
				existingUser.password
			);

			if (!passwordMatch) {
				return cb(null, false);
			}

			const user = existingUser.toObject();

			// remove the pw before we send the data back
			delete user.password;

			return cb(null, user);
		} catch (error) {
			cb(error);
		}
	})
);
