import { Exo } from 'next/font/google';
import '../styles/index.scss';

import { Metadata } from 'next';
import Analytics from '../components/Analytics';
import Elements from '../components/Animation/Elements';
import Navigator from '../components/Navigator';
import NoiseFilter from '../components/NoiseFilter';
import ToggleTheme from '../components/ToggleTheme';

import Title from '../components/Title';
import { client } from '../services/graphql/client';
import { getOwnerHeading, getOwnerSEO } from '../services/graphql/queries/owner';
import { generateSEO } from '../utils/generateSEO';

export const revalidate = 3600; // 1hr

const font = Exo({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
	const {
		owners: [{ seo }],
	} = await client.request(getOwnerSEO);

	return generateSEO({ seo });
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const {
		owners: [heading],
	} = await client.request(getOwnerHeading);

	return (
		<>
			<html lang="pt" className={`${font.className} dark`}>
				<body className="flex flex-col justify-start px-9">
					<div className="flex justify-end h-10">
						<ToggleTheme />
					</div>
					<Elements />
					<main className="h-full backdrop-blur-3xl lg:backdrop-blur-[120px] backdrop-brightness-[1.15] dark:backdrop-brightness-50 scrollbar overflow-y-scroll border rounded-md  border-zinc-500/50">
						<div className="grid h-full grid-cols-1 md:grid-cols-2">
							<div className="flex flex-col gap-10 p-10 lg:justify-between ">
								<Title name={heading?.name} subtitle={heading?.subtitle} />
								<Navigator />
							</div>
							<div className="max-w-3xl p-10 pt-0 overflow-y-scroll scrollbar lg:p-0">{children}</div>
						</div>
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
