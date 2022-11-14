'use client';

import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
	return (
		<motion.div
			className="grid h-[calc(100vh_-_4.75rem)] -m-10 place-items-center dark:bg-black/80"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<AiOutlineLoading3Quarters className="text-3xl animate-spin" />
		</motion.div>
	);
}
