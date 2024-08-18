import { InferSchemaType, model, Schema } from 'mongoose';

const userSchema = new Schema(
	{
		username: { type: String, unique: true, sparse: true }, // with sparse: true we can add multiple users that do not have a username - it makes it not conflict with the unique: true rule
		email: { type: String, unique: true, sparse: true, select: false }, // select: false means that the email address will not be returned when we fetch a user - this is because it is sensitive data
		displayName: { type: String },
		about: { type: String },
		profilePicUrl: { type: String },
		password: { type: String, select: false },
		googleId: { type: String, unique: true, sparse: true, select: false },
		githubId: { type: String, unique: true, sparse: true, select: false },
	},
	{ timestamps: true }
);

// this function will be executed whenever we try to create a user or save changes to an existing user
userSchema.pre('validate', function (next) {
	if (!this.email && !this.googleId && !this.githubId) {
		return next(new Error('User must have an email or social provider id'));
	}
	next();
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>('User', userSchema);
