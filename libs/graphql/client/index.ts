import { GraphQLClient } from 'graphql-request';

const url = process.env.GRAPH_CMS_HOST_URL ?? '';
const token = process.env.GRAPH_CMS_TOKEN;

export const client = new GraphQLClient(url, {
	headers: {
		authorization: `Bearer ${token}`,
	},
});
