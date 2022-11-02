import { client } from '../libs/graphql/client';
import { getProjects } from '../libs/graphql/queries/projects';

export const revalidate = 3600;

const Home = async () => {
	const { projects } = await client.request(getProjects);
	return (
		<div>
			<h2>
				<strong>{projects[0].id}</strong>
			</h2>
		</div>
	);
};

export default Home;
