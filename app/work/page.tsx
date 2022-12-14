import FadeIn from '../../components/Animation/FadeIn';
import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import WorkList from '../../components/WorkList';
import { client } from '../../services/graphql/client';
import { getOwnerHeading, getOwnerWorks } from '../../services/graphql/queries/owner';

const Work = async () => {
	const {
		owners: [heading],
	} = await client.request(getOwnerHeading);

	const {
		owners: [owner],
	} = await client.request(getOwnerWorks);

	return (
		<FadeIn>
			<div className="grid grid-cols-1 gap-10 lg:h-full lg:gap-32 md:grid-cols-2">
				<div className="flex flex-col gap-10 lg:justify-between">
					<Title name={heading?.name} subtitle={heading?.subtitle} />
					<Navigator />
				</div>
				<WorkList works={owner.works} />
			</div>
		</FadeIn>
	);
};

export default Work;
