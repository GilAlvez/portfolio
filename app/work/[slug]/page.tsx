import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';
import { client } from '../../../libs/graphql/client';
import { getWorkBySlug, getWorksSlugs } from '../../../libs/graphql/queries/work';

import sanitizeHtml from 'sanitize-html';

export const dynamicParams = false;

const WorkBySlug = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;
	const { work } = await client.request(getWorkBySlug, { slug });

	return (
		<>
			<figure className="-mx-10 -mt-10 h-40 relative select-none">
				<Image
					src={work?.banner.url as string}
					alt="Banner do projeto"
					className="object-cover"
					fill
					priority
				/>
			</figure>
			<div className="flex flex-col gap-8 py-8 container mx-auto lg:px-32 2xl:px-52">
				<h1>{work?.title}</h1>
				<hr />
				<section className="grid grid-cols-2 gap-8">
					<table className="table-auto w-fit">
						<tbody>
							<tr className="align-top ">
								<td className="pr-6 pb-6 font-semibold">Lançamento</td>
								<td className="pr-6 pb-6">{work?.release}</td>
							</tr>
							<tr className="align-top ">
								<td className="pr-6 pb-6 font-semibold">Atribuições</td>
								<td className="pr-6 pb-6">{work?.responsibilities.map((item) => `${item}, `)}</td>
							</tr>
							<tr className="align-top ">
								<td className="font-semibold">Tecnologias</td>
								<td>{work?.techs.map((item) => `${item}, `)}</td>
							</tr>
						</tbody>
					</table>
					<div className="flex flex-col gap-6">
						<p>{work?.resume}</p>
						<a
							className="text-lg flex items-center gap-2 w-max"
							href={work?.link as any}
							target="_blank"
							rel="noreferrer noopener"
						>
							<span>{work?.link}</span>
							<BsArrowUpRight />
						</a>
					</div>
				</section>
				<hr />

				<section
					className="rich-text flex flex-col items-center gap-8"
					dangerouslySetInnerHTML={{ __html: sanitizeHtml(work?.content.html as string) }}
				/>
				<span className="text-end">{new Date(work?.updatedAt).toLocaleString()}</span>
			</div>
		</>
	);
};

export default WorkBySlug;

export async function generateStaticParams() {
	const { works } = await client.request(getWorksSlugs);

	return works.map((work) => ({
		slug: work.slug,
	}));
}
