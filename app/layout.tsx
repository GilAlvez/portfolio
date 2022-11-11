/* eslint-disable @next/next/no-img-element */
import { Exo } from '@next/font/google';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Main from '../components/Main';
import NoiseFilter from '../components/NoiseFilter';
import ToggleTheme from '../components/ToggleTheme';
import '../styles/index.scss';

export const revalidate = 3600;

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
					<Main>{children}</Main>
					<footer className="mt-auto select-none py-2 text-center font-normal text-sm opacity-90">
						Designed and coded by Gildson Alves © 2022 (W.I.P.)
					</footer>
					<NoiseFilter />
				</body>
			</html>
		</>
	);
}
