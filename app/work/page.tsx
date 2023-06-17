import FadeIn from '../../components/Animation/FadeIn';
import WorkList from '../../components/WorkList';
import { client } from '../../services/graphql/client';
import { getOwnerWorks } from '../../services/graphql/queries/owner';

const Work = async () => {
	const {
		owners: [owner],
	} = await client.request(getOwnerWorks);

	return (
		<FadeIn>
			<WorkList works={owner.works} />
		</FadeIn>
	);
};

export default Work;
