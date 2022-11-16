import Seo from '../../../components/SEO';
import { client } from '../../../libs/graphql/client';
import { getWorkSEO } from '../../../libs/graphql/queries/work';

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
