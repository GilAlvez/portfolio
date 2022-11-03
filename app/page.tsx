// import { client } from '../libs/graphql/client';
// import { getProjects } from '../libs/graphql/queries/projects';

import Link from 'next/link';

export default async function Page() {
	// const { projects } = await client.request(getProjects);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
			<div className="flex flex-col justify-between">
				<div>
					<Link href="/">
						<h1 className="">Gildson Alves</h1>
					</Link>
					<h2>Front-end Developer</h2>
				</div>
				<div className="flex flex-col gap-2 w-fit">
					<Link href="/about" className="text-6xl  ">
						Sobre
					</Link>
					<Link href="/work" className="text-6xl ">
						Trabalho
					</Link>
					<Link href="/contact" className="text-6xl ">
						Contato
					</Link>
				</div>
			</div>
			<div></div>
		</div>
	);
}
