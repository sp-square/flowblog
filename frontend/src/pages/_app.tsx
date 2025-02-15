import '@/styles/globals.scss';
import '@/styles/utils.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Container, SSRProvider } from 'react-bootstrap';
import NextNProgress from 'nextjs-progressbar';
import styles from '@/styles/App.module.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

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
			<SSRProvider>
				<div className={inter.className}>
					<NextNProgress color="#21FA90" />
					<NavBar />
					<main>
						<Container className={styles.pageContainer}>
							<Component {...pageProps} />
						</Container>
					</main>
					<Footer />
				</div>
			</SSRProvider>
		</>
	);
}
