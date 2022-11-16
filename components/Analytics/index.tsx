'use client';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const Analytics = () => {
	return (
		<>
			<GoogleAnalytics strategy="lazyOnload" trackPageViews />
		</>
	);
};

export default Analytics;
