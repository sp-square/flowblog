import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Flow Blog</title>
				<meta
					name="description"
					content="A full-stack NextJS course project by Coding In Flow"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={inter.className}>
				<main>
					<Component {...pageProps} />
				</main>
			</div>
		</>
	);
}
