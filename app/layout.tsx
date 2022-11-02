import { Work_Sans } from '@next/font/google';
import '../styles/index.css';

const workSans = Work_Sans();

interface LayoutRootProps {
	children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutRootProps) => {
	return (
		<html className={workSans.className}>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
