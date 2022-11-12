'use client';

import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingPage = () => {
	return (
		<motion.div
			className="-m-10 h-screen grid place-items-center dark:bg-black/80"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<AiOutlineLoading3Quarters className="animate-spin text-3xl" />
		</motion.div>
	);
};

export default LoadingPage;
