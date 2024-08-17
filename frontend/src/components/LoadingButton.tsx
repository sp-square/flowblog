import { ReactNode } from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';

interface LoadingButtonProps {
	isLoading: boolean;
	children: ReactNode; // text that is used inside the button - the key HAS to be "children"
}

export default function LoadingButton({
	isLoading,
	children,
	...props
}: LoadingButtonProps & ButtonProps) {
	return (
		<Button {...props}>
			{isLoading && (
				<>
					<Spinner
						as="span"
						animation="border"
						size="sm"
						role="status"
						aria-hidden="true"
					/>
					<span className="visually-hidden">Loading...</span>{' '}
				</>
			)}
			{children}
		</Button>
	);
}
