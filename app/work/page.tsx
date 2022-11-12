import PageAnimation from '../../components/Animate/PageAnimation';
import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import WorkCard from '../../components/WorkCard';
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
				<div className="flex flex-col overflow-y-scroll scrollbar -my-10 py-52">
					{owner.works.map((work) => (
						<WorkCard key={work.slug} data={work} />
					))}
				</div>
			</div>
		</PageAnimation>
	);
};

export default Work;
