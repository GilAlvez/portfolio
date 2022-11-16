'use client';

import { motion } from 'framer-motion';
import { MixedCircle } from './styles';

const Elements = () => {
	const MotionMixedCircle = motion(MixedCircle);
	return (
		<div className="relative opacity-40 dark:opacity-95">
			{/* <MotionMixedCircle
				initial={{ y: 0, x: -30 }}
				animate={{ y: 140, x: -100 }}
				transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4 }}
				className="top-0 right-0 bg-zinc-500"
			/> */}
			<MotionMixedCircle
				initial={{ y: 20, x: -50, opacity: 0.4 }}
				animate={{ y: 150, x: -160, opacity: 1 }}
				transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6 }}
				className="right-0 top-24 bg-secondary-200 dark:bg-secondary-900"
			/>
			<MotionMixedCircle
				initial={{ y: -20, x: -10, opacity: 0.6 }}
				animate={{ y: -200, x: -50, opacity: 0.3 }}
				transition={{ repeat: Infinity, repeatType: 'reverse', duration: 8 }}
				className="right-0 top-72 bg-primary-400 dark:bg-primary-900"
			/>
		</div>
	);
};

export default Elements;
