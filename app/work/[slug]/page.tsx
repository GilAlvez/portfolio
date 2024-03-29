import { BsArrowLeft, BsArrowUpRight } from 'react-icons/bs';
import { client } from '../../../services/graphql/client';
import { getWorkBySlug, getWorkSEO, getWorksSlugs } from '../../../services/graphql/queries/work';

import { Metadata } from 'next';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';
import FadeIn from '../../../components/Animation/FadeIn';
import SubtitlesTable from '../../../components/SubtitlesTable';
import { generateSEO } from '../../../utils/generateSEO';

export const dynamicParams = false;

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
	const { work } = await client.request(getWorkSEO, { slug });

	return generateSEO({ seo: work?.seo });
}

const WorkBySlug = async ({ params: { slug } }: Props) => {
	const { work } = await client.request(getWorkBySlug, { slug });

	return (
		<FadeIn>
			{/* <figure className="relative -mx-10 -mt-10 select-none h-52">
				<Image
					src={work?.banner.url as string}
					alt="Banner do projeto"
					className="object-cover"
					fill
					priority
				/>
			</figure> */}
			<div className="flex flex-col gap-8 py-8">
				<Link
					href="/work"
					className="flex items-center px-3 py-1 -mb-2 text-lg border rounded-md dark:border-zinc-600/50 w-fit hover:bg-zinc-200/50 dark:hover:bg-zinc-600/50"
				>
					<BsArrowLeft />
					<span className="pl-2 text-base">voltar</span>
				</Link>
				<h2 className="text-6xl lg:text-8xl">{work?.title}</h2>
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
								className="flex items-center gap-2 text-lg font-semibold border-b w-max border-b-primary-500/50 hover:border-b-primary-500"
								href={work.link}
								target="_blank"
								rel="noreferrer noopener"
							>
								<span>Visitar o site</span>
								<BsArrowUpRight />
							</a>
						)}
					</div>
				</section>
				<hr />

				<section
					className="rich-text"
					dangerouslySetInnerHTML={{
						__html: sanitizeHtml(work?.content.html as string, {
							allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
						}),
					}}
				/>
				<span className="text-end">
					Última atualização: {new Date(work?.updatedAt).toLocaleString().split(',')[0]}
				</span>
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
