'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Chip from '../Chip';
import ConditionalLink from '../ConditionalLink';

interface WorkCardProps {
	works: {
		slug: string;
		release: string;
		active: boolean;
		title: string;
		resume: string;
		techs: string[];
		tags: {
			name: string;
			color: 'primary' | 'secondary' | 'green' | 'blue' | 'yellow';
		}[];
	}[];
}

const WorkList = ({ works }: WorkCardProps) => {
	const [isMobile, setIsMobile] = useState<boolean>();
	const [isHovered, setIsHovered] = useState<any>((state: any) =>
		works.map(({ slug }) => {
			return { ...state, [slug]: false };
		})
	);

	useEffect(() => {
		window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
	}, []);

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
			{works
				.sort((a, b) => +b.active - +a.active)
				.map(({ release, resume, slug, techs, title, active, tags }) => (
					<motion.div
						key={slug}
						className="select-none lg:pb-8"
						variants={item}
						onMouseEnter={() => setIsHovered((state: any) => ({ ...state, [slug]: true }))}
						onMouseLeave={() => setIsHovered((state: any) => ({ ...state, [slug]: false }))}
					>
						<ConditionalLink condition={active} href={`/work/${slug}`}>
							<div>
								<h6 className="flex items-center gap-2">
									{release}

									{!active && <Chip color="primary">Em breve</Chip>}

									{tags.map(({ color, name }) => (
										<Chip key={name} color={color}>
											{name}
										</Chip>
									))}
								</h6>
								<h2>{title}</h2>
							</div>
							<AnimatePresence>
								{(isMobile || isHovered[slug]) && (
									<motion.hr
										key={slug + 1}
										initial={{ width: 0, marginTop: 0 }}
										animate={{ width: '100%', marginTop: '0.5rem' }}
										exit={{ width: 0, marginTop: 0 }}
										transition={{ duration: 0.75 }}
									/>
								)}
								{(isMobile || isHovered[slug]) && (
									<motion.div
										key={slug + 2}
										initial={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
										animate={{
											opacity: 1,
											height: isMobile ? 130 : 100,
											paddingTop: '0.75rem',
											paddingBottom: '0.75rem',
										}}
										exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
										transition={{ duration: 0.75 }}
									>
										<p className="mb-2 line-clamp-3 lg:line-clamp-2">{resume}</p>
										<div className="flex flex-wrap gap-3">
											{techs.map((tech) => (
												<Chip key={tech}>{tech}</Chip>
											))}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</ConditionalLink>
					</motion.div>
				))}
		</motion.section>
	);
};

export default WorkList;
