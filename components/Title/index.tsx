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
			<h2 className="transition duration-500 text-zinc-900/60 dark:text-zinc-200/60 font-light">
				Front-end Developer
			</h2>
		</div>
	);
};

export default Title;
