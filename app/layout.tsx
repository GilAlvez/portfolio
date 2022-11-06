import { Work_Sans } from '@next/font/google';
import ToggleTheme from '../components/ToggleTheme';
import '../styles/index.scss';

const workSans = Work_Sans();

interface LayoutRootProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutRootProps) {
	return (
		<>
			<html className={`dark ${workSans.className}`}>
				<body className="min-h-full px-9 flex flex-col justify-start">
					<div className="h-10 flex justify-end">
						<ToggleTheme />
					</div>
					<main className="h-full scrollbar overflow-y-scroll border p-10 border-slate-500">{children}</main>

					<footer className="mt-auto select-none py-2 text-center text-sm opacity-70 ">
						Designed and coded by Gildson Alves © 2022 (W.I.P.)
					</footer>
				</body>
			</html>
		</>
	);
}
