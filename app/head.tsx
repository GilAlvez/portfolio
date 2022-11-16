import Seo from '../components/SEO';
import { client } from '../libs/graphql/client';
import { getOwnerSEO } from '../libs/graphql/queries/owner';

const Head = async () => {
	const {
		owners: [owner],
	} = await client.request(getOwnerSEO);

	return (
		<>
			<Seo data={owner.seo} />
		</>
	);
};

export default Head;
