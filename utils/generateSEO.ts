import { Metadata } from 'next';

export interface SeoProps {
	seo?: {
		title: string;
		description: string;
		keywords: string;
		image: {
			url: string;
		};
	};
}

export const generateSEO = ({ seo }: SeoProps): Metadata => ({
	title: seo?.title,
	description: seo?.description,
	keywords: seo?.keywords,

	openGraph: {
		title: seo?.title,
		description: seo?.description,
		siteName: 'Gil Alves - Portfolio',
		locale: 'pt_BR',
		type: 'website',
		url: process.env.NEXT_PUBLIC_URL,
		images: [{ url: seo?.image.url! }],
	},

	icons: {
		icon: '/favicon-32x32.png',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},

	manifest: '/site.webmanifest',
	verification: { google: '9j2WKjT-2NYohLH3b6ebDbIUD1nBFTVFrahhZQoXTO4' },
	robots: { index: false, follow: true, nocache: true },

	colorScheme: 'dark',
	creator: 'Gil Alves',
	publisher: 'Gil Alves',
	authors: [{ name: 'Gil Alves', url: 'https://github.com/GilAlvez' }],
});
