import { RequestHandler } from 'express';
import BlogPostModel from '../models/blog-post';

// We export a const instead of a function because this allows us to define a type, which will automatically apply the correct type to req, res, and next
export const getBlogPosts: RequestHandler = async (req, res, next) => {
	// We use a try-catch block because we want to do a database operation, and this could go wrong
	try {
		const allBlogPosts = await BlogPostModel.find().exec();
		res.status(200).json(allBlogPosts);
	} catch (error) {
		res.status(500).json({ error });
	}
};

// Set up the interface to define the values that we expect to be in the body of the request received by our server when the user is trying to create a blog post.
interface BlogPostBody {
	slug: string;
	title: string;
	summary: string;
	body: string;
}

export const createBlogPost: RequestHandler<
	unknown,
	unknown,
	BlogPostBody,
	unknown
> = async (req, res, next) => {
	const { slug, title, summary, body } = req.body;
	try {
		const newPost = await BlogPostModel.create({
			slug,
			title,
			summary,
			body,
		});
		res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json({ error });
	}
};
