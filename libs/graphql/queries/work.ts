import { graphql } from '../gql';

export const getWorksSlugs = graphql(`
	query WorkSlug($active: Boolean!) {
		works(where: { active: $active }) {
			slug
		}
	}
`);

export const getWorkSEO = graphql(`
	query WorkSEO($slug: String!) {
		work(where: { slug: $slug }) {
			seo {
				title
				description
				image
				keywords
			}
		}
	}
`);

export const getWorkBySlug = graphql(`
	query Work($slug: String!) {
		work(where: { slug: $slug }) {
			active
			slug
			title
			release
			responsibilities
			techs
			resume
			link
			updatedAt
			banner {
				url
			}
			content {
				html
			}
			seo {
				title
				description
				image
				keywords
			}
		}
	}
`);
