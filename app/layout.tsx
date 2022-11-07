import { Exo } from '@next/font/google';
import ToggleTheme from '../components/ToggleTheme';
import '../styles/index.scss';

const font = Exo();

interface LayoutRootProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutRootProps) {
	return (
		<>
			<html className={`${font.className} dark`}>
				<body className="min-h-full px-9 flex flex-col justify-start">
					<div className="h-10 flex justify-end">
						<ToggleTheme />
					</div>
					<main className="h-full backdrop-blur bg-transparent scrollbar overflow-y-scroll border p-10 border-zinc-500/50">
						{children}
					</main>

					<footer className="mt-auto select-none py-2 text-center font-normal text-sm opacity-90">
						Designed and coded by Gildson Alves © 2022 (W.I.P.)
					</footer>
				</body>
			</html>
		</>
	);
}
