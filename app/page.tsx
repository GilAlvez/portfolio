import Navigator from '../components/Navigator';
import Title from '../components/Title';

import PageAnimation from '../components/Animate/PageAnimation';
import { client } from '../libs/graphql/client';
import { getOwnerHeading } from '../libs/graphql/queries/owner';

const Page = async () => {
	const {
		owners: [owner],
	} = await client.request(getOwnerHeading);

	return (
		<PageAnimation>
			<div className="grid grid-cols-1 gap-14 lg:h-full lg:gap-32 md:grid-cols-2">
				<div className="flex flex-col gap-14 lg:justify-between">
					<Title name={owner?.name} subtitle={owner?.subtitle} />
					<Navigator />
				</div>
			</div>
		</PageAnimation>
	);
};

export default Page;
