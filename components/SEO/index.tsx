export interface SeoProps {
	data?: {
		title: string;
		description: string;
		keywords: string;
		image: string;
	};
}

const Seo = ({ data }: SeoProps) => {
	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<title>{data?.title}</title>
			<meta name="title" content={data?.title} />
			<meta name="description" content={data?.description} />
			<meta name="keywords" content={data?.keywords} />

			<meta property="og:type" content="website" />
			<meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
			<meta property="og:title" content={data?.title} />
			<meta property="og:description" content={data?.description} />
			<meta property="og:image" content={data?.image} />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
			<meta property="twitter:title" content={data?.title} />
			<meta property="twitter:description" content={data?.description} />
			<meta property="twitter:image" content={data?.image} />

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />

			<meta name="author" content="Gil Alves, github.com/GilAlvez" />
			<meta name="robots" content="all" />
		</>
	);
};

export default Seo;
