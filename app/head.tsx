import Seo from '../components/SEO';
import { client } from '../services/graphql/client';
import { getOwnerSEO } from '../services/graphql/queries/owner';

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
