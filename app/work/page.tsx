import PageAnimation from '../../components/Animate/PageAnimation';
import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import WorkList from '../../components/WorkList';
import { client } from '../../libs/graphql/client';
import { getOwnerHeading, getOwnerWorks } from '../../libs/graphql/queries/owner';

const Work = async () => {
	const {
		owners: [heading],
	} = await client.request(getOwnerHeading);

	const {
		owners: [owner],
	} = await client.request(getOwnerWorks);

	return (
		<PageAnimation>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
				<div className="flex flex-col justify-between">
					<Title name={heading?.name} subtitle={heading?.subtitle} />
					<Navigator />
				</div>
				<WorkList works={owner.works} />
			</div>
		</PageAnimation>
	);
};

export default Work;
