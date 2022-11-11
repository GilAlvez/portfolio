import Link from 'next/link';

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
	return (
		<section className="group cursor-pointer">
			<Link href={`/work/${data.slug}`}>
				<div className="group-hover:border-b">
					<h6>{`${data.release} / ${data.type}`} </h6>
					<h2>{data.title}</h2>
				</div>

				<div className="py-4 px-2 hidden group-hover:block">
					<p className="line-clamp-2 mb-2">{data.resume}</p>
					<div className="flex flex-wrap gap-4">
						{data.techs.map((tech) => (
							<span key={tech} className="bg-zinc-500/40 px-2">
								{tech}
							</span>
						))}
					</div>
				</div>
			</Link>
		</section>
	);
};

export default WorkCard;
