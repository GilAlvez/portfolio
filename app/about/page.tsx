import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import { client } from '../../libs/graphql/client';
import { getOwnerAbout, getOwnerHeading } from '../../libs/graphql/queries/owner';
import { AboutImage } from './styles';

import sanitizeHtml from 'sanitize-html';

const About = async () => {
	const {
		owners: [heading],
	} = await client.request(getOwnerHeading);
	const {
		owners: [about],
	} = await client.request(getOwnerAbout);

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
			<div className="flex flex-col justify-between">
				<Title name={heading?.name} subtitle={heading?.subtitle} />
				<Navigator />
			</div>

			<div className="overflow-y-scroll scrollbar lg:py-52 -my-10">
				<figure className="bg-primary-500/80 relative mx-auto mb-10 w-80 h-80">
					<AboutImage
						src={about.image.url}
						alt="Gildson Foto"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</figure>
				<div
					className="rich-text flex flex-col items-center gap-4"
					dangerouslySetInnerHTML={{ __html: sanitizeHtml(about.description.html) }}
				/>
			</div>
		</div>
	);
};

export default About;
