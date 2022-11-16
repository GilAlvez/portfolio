import Navigator from '../components/Navigator';
import Title from '../components/Title';

import FadeIn from '../components/Animation/FadeIn';
import { client } from '../services/graphql/client';
import { getOwnerHeading } from '../services/graphql/queries/owner';

const Page = async () => {
	const {
		owners: [owner],
	} = await client.request(getOwnerHeading);

	return (
		<FadeIn>
			<div className="grid grid-cols-1 gap-10 lg:h-full lg:gap-32 md:grid-cols-2">
				<div className="flex flex-col gap-10 lg:h-full lg:justify-between">
					<Title name={owner?.name} subtitle={owner?.subtitle} />
					<Navigator />
				</div>
			</div>
		</FadeIn>
	);
};

export default Page;
