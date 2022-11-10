import { client } from '../libs/graphql/client';
import { getOwnerSEO } from '../libs/graphql/queries/owner';

const Head = async () => {
	const {
		owners: [owner],
	} = await client.request(getOwnerSEO);

	const { title, description, keywords } = owner.seo;

	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{title}</title>
			<meta name="author" content="Gildson Alves" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</>
	);
};

export default Head;
