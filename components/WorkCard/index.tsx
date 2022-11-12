'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface WorkCardProps {
	data: {
		slug: string;
		release: string;
		type: string;
		title: string;
		resume: string;
		techs: string[];
	};
}

const WorkCard = ({ data }: WorkCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<section
			className="cursor-pointer pb-8"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Link href={`/work/${data.slug}`}>
				<div>
					<h6>{`${data.release} / ${data.type}`} </h6>
					<h2>{data.title}</h2>
				</div>
				<AnimatePresence>
					{isHovered && (
						<motion.hr
							key={0}
							initial={{ width: 0, marginTop: 0 }}
							animate={{ width: '100%', marginTop: '0.5rem' }}
							exit={{ width: 0, marginTop: 0 }}
							transition={{ duration: 1 }}
						/>
					)}
					{isHovered && (
						<motion.div
							key={1}
							initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
							animate={{ opacity: 1, height: 100, paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
							exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
							transition={{ duration: 1 }}
						>
							<p className="line-clamp-2 mb-2">{data.resume}</p>
							<div className="flex flex-wrap gap-3">
								{data.techs.map((tech) => (
									<span key={tech} className="bg-zinc-400/30 px-2">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</Link>
		</section>
	);
};

export default WorkCard;
