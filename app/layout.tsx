import { Exo } from '@next/font/google';
import '../styles/index.scss';

import Analytics from '../components/Analytics';
import Elements from '../components/Animation/Elements';
import NoiseFilter from '../components/NoiseFilter';
import ToggleTheme from '../components/ToggleTheme';

export const revalidate = 120; // 2min

const font = Exo();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<html lang="pt" className={`${font.className} dark`}>
				<body className="flex flex-col justify-start px-9">
					<div className="flex justify-end h-10">
						<ToggleTheme />
					</div>
					<Elements />
					<main className="h-full backdrop-blur-3xl lg:backdrop-blur-[120px] backdrop-brightness-[1.15] dark:backdrop-brightness-50 scrollbar overflow-y-scroll border rounded-md p-10 border-zinc-500/50">
						{/* <AnimatePresence mode="wait">{children}</AnimatePresence> */}
						{children}
					</main>
					<footer className="py-2 mt-auto text-sm font-normal text-center select-none dark:opacity-80">
						Designed and coded by Gil Alves © 2022
					</footer>
					<NoiseFilter />
				</body>

				<Analytics />
			</html>
		</>
	);
}
