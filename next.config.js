/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['media.graphassets.com'],
	},
	experimental: {
		appDir: true,
		fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
	},
};

module.exports = nextConfig;
