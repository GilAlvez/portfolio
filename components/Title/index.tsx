// import { client } from '../libs/graphql/client';
// import { getProjects } from '../libs/graphql/queries/projects';

import Link from 'next/link';

const Title = () => {
	// const { projects } = await client.request(getProjects);
	return (
		<div>
			<Link href="/">
				<h1 className="">Gildson Alves</h1>
			</Link>
			<h2>Front-end Developer</h2>
		</div>
	);
};

export default Title;
