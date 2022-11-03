import { Work_Sans } from '@next/font/google';
import ToggleTheme from '../components/ToggleTheme';
import './globals.css';

const workSans = Work_Sans();

interface LayoutRootProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutRootProps) {
	return (
		<html className={`dark ${workSans.className}`}>
			<body>
				<section className="h-screen px-9 flex flex-col justify-start">
					<header className="h-10 flex justify-end">
						<ToggleTheme />
					</header>
					<main className="h-full border p-10 border-slate-500">{children}</main>

					<footer className="select-none h-10 text-sm opacity-70 mt-auto grid place-items-center">
						Designed and coded by Gildson Alves © 2022 (W.I.P.)
					</footer>
				</section>
			</body>
		</html>
	);
}
