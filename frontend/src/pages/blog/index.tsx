import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { BlogPost } from '@/models/blog-post';
import * as BlogApi from '@/network/api/blog';
import BlogPostsGrid from '@/components/BlogPostsGrid';

// create an interface that defines the input this component needs
interface BlogPageProps {
	posts: BlogPost[];
}

// this function must be named exactly "getServerSideProps".
// note: this function only works for nextsjs pages; it doesn't work inside regualr components
export const getServerSideProps: GetServerSideProps<
	BlogPageProps
> = async () => {
	const posts = await BlogApi.getBlogPosts();
	return { props: { posts } };
};

export default function BlogPage({ posts }: BlogPageProps) {
	return (
		<>
			<Head>
				<title>Flow Blog - Articles</title>
				<meta name="description" content="Read the latest posts on Flow Blog" />
			</Head>
			<div>
				<h1>Blog</h1>
				<BlogPostsGrid posts={posts} />
			</div>
		</>
	);
}
