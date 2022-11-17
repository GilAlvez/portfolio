import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: {
		[process.env.GRAPH_CMS_HOST_URL!]: {
			headers: {
				Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
			},
		},
	},
	documents: 'services/graphql/queries/**',
	generates: {
		'./services/graphql/gql/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
