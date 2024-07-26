import Head from 'next/head';
import { Button } from 'react-bootstrap';

export default function BlogPage() {
	return (
		<>
			<Head>
				<title>Flow Blog - Articles</title>
				<meta name="description" content="Read the latest posts on Flow Blog" />
			</Head>
			<div>
				<div className="">Hello, Blog!</div>
				<div className="">
					<Button>button</Button>
				</div>
				<div className="">
					<a href="#">link</a>
				</div>
			</div>
		</>
	);
}
