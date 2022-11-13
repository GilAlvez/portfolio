'use client';

import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingPage = () => {
	return (
		<motion.div
			className="grid h-screen -m-10 place-items-center dark:bg-black/80"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<AiOutlineLoading3Quarters className="text-3xl animate-spin" />
		</motion.div>
	);
};

export default LoadingPage;
