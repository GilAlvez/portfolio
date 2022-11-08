/* eslint-disable @next/next/no-img-element */
import { Exo } from '@next/font/google';
import BackgroundAnimation from '../components/BackgroundAnimation';
import NoiseFilter from '../components/NoiseFilter';
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
					<BackgroundAnimation />
					<main className="h-full backdrop-blur-3xl lg:backdrop-blur-[90px] backdrop-brightness-[1.15] dark:backdrop-brightness-50 scrollbar overflow-y-scroll border rounded-md p-10 border-zinc-500/50">
						{children}
					</main>
					<footer className="mt-auto select-none py-2 text-center font-normal text-sm opacity-90">
						Designed and coded by Gildson Alves © 2022 (W.I.P.)
					</footer>
					<NoiseFilter />
				</body>
			</html>
		</>
	);
}
