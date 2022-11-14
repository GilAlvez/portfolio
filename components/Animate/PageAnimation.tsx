'use client';

import { motion } from 'framer-motion';

const PageAnimation = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			className="h-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.7 }}
		>
			{children}
		</motion.div>
	);
};

export default PageAnimation;
