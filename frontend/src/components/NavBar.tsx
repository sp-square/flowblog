import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import logo from '@/assets/images/flow-blog-logo.png';
import styles from '@/styles/NavBar.module.css';

export default function NavBar() {
	const router = useRouter(); // this allows us to get the url the client is currently on
	return (
		<Navbar variant="dark" expand="md" collapseOnSelect bg="body" sticky="top">
			<Container>
				<Navbar.Brand as={Link} href="/" className="gap-1 d-flex">
					<Image src={logo} alt="Flow Blog logo" width={30} height={30} />
					<span className={styles.brandText}>Flow Blog</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav>
						<Nav.Link as={Link} href="/" active={router.pathname === '/'}>
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							href="/blog"
							active={router.pathname === '/blog'}
						>
							Articles
						</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link
							as={Link}
							href="/blog/new-post"
							className="gap-1 link-primary d-flex align-items-center"
						>
							<FiEdit />
							Create post
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
