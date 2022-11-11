import { client } from '../../../libs/graphql/client';
import { getWorkSEO } from '../../../libs/graphql/queries/work';

const Head = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const { work } = await client.request(getWorkSEO, { slug });

	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{work?.seo.title}</title>
			<meta name="author" content="Gildson Alves" />
			<meta name="description" content={work?.seo.description} />
			<meta
				name="keywords"
				content="Portifolio, Front-end, Developer, frontend, CSS, JavaScript, HTML, React, Typescript, Next, Next.js"
			></meta>
		</>
	);
};

export default Head;
