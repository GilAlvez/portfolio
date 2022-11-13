'use client';

import { motion } from 'framer-motion';
import { MixedCircle } from './styles';

const BackgroundAnimation = () => {
	const MotionMixedCircle = motion(MixedCircle);
	return (
		<div className="relative opacity-40 dark:opacity-95">
			<MotionMixedCircle
				initial={{ y: 0, x: 0, scale: 0.6, opacity: 1 }}
				animate={{ y: 100, x: -100, scale: 1, opacity: 0.8 }}
				transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10 }}
				className="top-0 right-0 bg-zinc-500"
			/>
			<MotionMixedCircle
				initial={{ y: 0, x: 0, scale: 0.8, opacity: 0.8 }}
				animate={{ y: 50, x: -160, scale: 1, opacity: 1 }}
				transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10 }}
				className="right-0 top-24 bg-secondary-300 dark:bg-secondary-900"
			/>
			<MotionMixedCircle
				initial={{ y: 0, x: 0, scale: 1, opacity: 1 }}
				animate={{ y: -140, x: -50, scale: 1, opacity: 0.8 }}
				transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10 }}
				className="right-0 top-52 bg-primary-300 dark:bg-primary-900"
			/>
		</div>
	);
};

export default BackgroundAnimation;
