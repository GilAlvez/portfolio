import sanitizeHtml from 'sanitize-html';
import FadeIn from '../../components/Animation/FadeIn';
import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import { client } from '../../libs/graphql/client';
import { getOwnerAbout, getOwnerHeading } from '../../libs/graphql/queries/owner';
import { AboutImage } from './styles';

const About = async () => {
	const {
		owners: [heading],
	} = await client.request(getOwnerHeading);
	const {
		owners: [about],
	} = await client.request(getOwnerAbout);

	return (
		<FadeIn>
			<div className="grid grid-cols-1 gap-10 lg:h-full lg:gap-32 md:grid-cols-2">
				<div className="flex flex-col gap-10 lg:justify-between">
					<Title name={heading?.name} subtitle={heading?.subtitle} />
					<Navigator />
				</div>

				<div className="overflow-y-scroll lg:-my-10 scrollbar lg:pt-40 lg:pb-20">
					<figure className="relative mx-auto mb-10 bg-primary-500/80 w-80 h-80">
						<AboutImage
							src={about.image.url}
							alt="Gildson Foto"
							fill
							priority
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</figure>
					<div
						className="flex flex-col items-center gap-4 rich-text"
						dangerouslySetInnerHTML={{ __html: sanitizeHtml(about.description.html) }}
					/>
				</div>
			</div>
		</FadeIn>
	);
};

export default About;
