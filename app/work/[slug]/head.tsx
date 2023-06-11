import Seo from '../../../components/SEO/deprecated';
import { client } from '../../../services/graphql/client';
import { getWorkSEO } from '../../../services/graphql/queries/work';

const Head = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const { work } = await client.request(getWorkSEO, { slug });

	return (
		<>
			<Seo data={work?.seo} />
		</>
	);
};

export default Head;
