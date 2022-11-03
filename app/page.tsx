// import { client } from '../libs/graphql/client';
// import { getProjects } from '../libs/graphql/queries/projects';

import Link from 'next/link';

export default async function Page() {
	// const { projects } = await client.request(getProjects);
	return (
		<div className="flex justify-between">
			<div>
				<h1>Gildson Alves</h1>
			</div>
			<div className="flex flex-col">
				<Link href="/about" className="text-5xl">
					Sobre
				</Link>
				<Link href="/work" className="text-5xl">
					Trabalhos
				</Link>
				<Link href="/contact" className="text-5xl">
					Contato
				</Link>
			</div>
		</div>
	);
}
