// import { client } from '../libs/graphql/client';
// import { getProjects } from '../libs/graphql/queries/projects';

import Link from 'next/link';

const Title = () => {
	// const { projects } = await client.request(getProjects);
	return (
		<div>
			<Link href="/">
				<h1 className="font-medium">Gildson Alves</h1>
			</Link>
			<h2 className="text-zinc-500 font-light">Front-end Developer</h2>
		</div>
	);
};

export default Title;
