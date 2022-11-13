import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import { client } from '../../../libs/graphql/client';
import { getWorkBySlug, getWorksSlugs } from '../../../libs/graphql/queries/work';

import sanitizeHtml from 'sanitize-html';
import PageAnimation from '../../../components/Animate/PageAnimation';
import SubtitlesTable from '../../../components/SubtitlesTable';

export const dynamicParams = false;

const WorkBySlug = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const { work } = await client.request(getWorkBySlug, { slug });

	return (
		<PageAnimation>
			<figure className="relative h-40 -mx-10 -mt-10 select-none">
				<Image
					src={work?.banner.url as string}
					alt="Banner do projeto"
					className="object-cover"
					fill
					priority
				/>
			</figure>
			<div className="container flex flex-col gap-8 py-8 mx-auto lg:px-32 2xl:px-52">
				<h1>{work?.title}</h1>
				<hr />
				<section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<SubtitlesTable
						release={work?.release}
						responsibilities={work?.responsibilities}
						techs={work?.techs}
					/>

					<div className="flex flex-col gap-6">
						<p>{work?.resume}</p>
						{work?.link && (
							<a
								className="flex items-center gap-2 w-max"
								href={work.link}
								target="_blank"
								rel="noreferrer noopener"
							>
								<span>Visualizar o site</span>
								<BsArrowUpRight />
							</a>
						)}
					</div>
				</section>
				<hr />

				<section
					className="flex flex-col items-center gap-8 rich-text"
					dangerouslySetInnerHTML={{ __html: sanitizeHtml(work?.content.html as string) }}
				/>
				<span className="text-end">{new Date(work?.updatedAt).toLocaleString()}</span>
			</div>
		</PageAnimation>
	);
};

export default WorkBySlug;

export async function generateStaticParams() {
	const { works } = await client.request(getWorksSlugs);

	return works.map((work) => ({
		slug: work.slug,
	}));
}
