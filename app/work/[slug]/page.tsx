import Image from 'next/image';
import { BsArrowLeft, BsArrowUpRight } from 'react-icons/bs';
import { client } from '../../../services/graphql/client';
import { getWorkBySlug, getWorksSlugs } from '../../../services/graphql/queries/work';

import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';
import FadeIn from '../../../components/Animation/FadeIn';
import SubtitlesTable from '../../../components/SubtitlesTable';

export const dynamicParams = false;

const WorkBySlug = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const { work } = await client.request(getWorkBySlug, { slug });

	return (
		<FadeIn>
			<figure className="relative -mx-10 -mt-10 select-none h-52">
				<Image
					src={work?.banner.url as string}
					alt="Banner do projeto"
					className="object-cover"
					fill
					priority
				/>
			</figure>
			<div className="container flex flex-col gap-8 py-8 mx-auto lg:px-32 2xl:px-52">
				<Link
					href="/work"
					className="flex items-center px-3 py-1 -mb-2 text-lg border rounded-md dark:border-zinc-600/50 w-fit hover:bg-zinc-200/50 dark:hover:bg-zinc-600/50"
				>
					<BsArrowLeft />
					<span className="pl-2 text-base">voltar</span>
				</Link>
				<h1 className="text-6xl lg:text-8xl">{work?.title}</h1>
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
					dangerouslySetInnerHTML={{
						__html: sanitizeHtml(work?.content.html as string, {
							allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
						}),
					}}
				/>
				<span className="text-end">{new Date(work?.updatedAt).toLocaleString()}</span>
			</div>
		</FadeIn>
	);
};

export default WorkBySlug;

export async function generateStaticParams() {
	const { works } = await client.request(getWorksSlugs, { active: true });
	return works.map((work) => ({
		slug: work.slug,
	}));
}
