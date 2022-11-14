import { graphql } from '../gql';

export const getOwnerSEO = graphql(`
	query OwnerSEO {
		owners(first: 1) {
			seo {
				title
				description
				image
				keywords
				lang
				favicon {
					url
				}
			}
		}
	}
`);

export const getOwnerHeading = graphql(`
	query OwnerHeading {
		owners(first: 1) {
			name
			subtitle
		}
	}
`);

export const getOwnerAbout = graphql(`
	query OwnerAbout {
		owners(first: 1) {
			image {
				url
			}
			description {
				html
			}
		}
	}
`);

export const getOwnerWorks = graphql(`
	query OwnerWorks {
		owners {
			works {
				... on Work {
					active
					slug
					release
					title
					resume
					techs
					tags
				}
			}
		}
	}
`);

export const getOwnerContact = graphql(`
	query OwnerContact {
		owners(first: 1) {
			social {
				email
				facebook
				github
				instagram
				linkedin
				whatsapp
			}
		}
	}
`);
