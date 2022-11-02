import { graphql } from '../gql';

export const getProjects = graphql(`
	query Projects {
		projects {
			createdAt
			id
			publishedAt
			slug
			title
			updatedAt
			url
		}
	}
`);
