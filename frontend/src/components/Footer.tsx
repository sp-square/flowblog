import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Container>
				<p>© {new Date().getFullYear()} Coding in Flow</p>
				<ul>
					<li>
						<Link href="/privacy">Privacy</Link>
					</li>
					<li>
						<Link href="/imprint">Imprint</Link>
					</li>
				</ul>
			</Container>
		</footer>
	);
}
