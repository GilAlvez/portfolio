'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface WorkCardProps {
	works: {
		slug: string;
		release: string;
		type: string;
		title: string;
		resume: string;
		techs: string[];
	}[];
}

const WorkList = ({ works }: WorkCardProps) => {
	const [isHovered, setIsHovered] = useState<any>((state: any) =>
		works.map(({ slug }) => {
			return { ...state, [slug]: false };
		})
	);

	const container = {
		hidden: {},
		visible: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { y: 50, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<motion.section
			variants={container}
			initial="hidden"
			animate="visible"
			className="flex flex-col overflow-y-scroll scrollbar lg:-my-10 lg:pt-40 lg:pb-20"
		>
			{works.map(({ release, resume, slug, techs, title, type }) => (
				<motion.div
					key={slug}
					className="pb-8 cursor-pointer"
					variants={item}
					onMouseEnter={() => setIsHovered((state: any) => ({ ...state, [slug]: true }))}
					onMouseLeave={() => setIsHovered((state: any) => ({ ...state, [slug]: false }))}
				>
					<Link href={`/work/${slug}`}>
						<div>
							<h6>{`${release} / ${type}`} </h6>
							<h2>{title}</h2>
						</div>
						<AnimatePresence>
							{isHovered[slug] && (
								<motion.hr
									key={slug + 1}
									initial={{ width: 0, marginTop: 0 }}
									animate={{ width: '100%', marginTop: '0.5rem' }}
									exit={{ width: 0, marginTop: 0 }}
									transition={{ duration: 0.75 }}
								/>
							)}
							{isHovered[slug] && (
								<motion.div
									key={slug + 2}
									initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
									animate={{ opacity: 1, height: 100, paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
									exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
									transition={{ duration: 0.75 }}
								>
									<p className="mb-2 line-clamp-2">{resume}</p>
									<div className="flex flex-wrap gap-3">
										{techs.map((tech) => (
											<span key={tech} className="px-2 bg-zinc-400/30">
												{tech}
											</span>
										))}
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</Link>
				</motion.div>
			))}
		</motion.section>
	);
};

export default WorkList;
