import sanitizeHtml from 'sanitize-html';
import PageAnimation from '../../components/Animate/PageAnimation';
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
		<PageAnimation>
			<div className="grid h-full grid-cols-1 gap-16 lg:gap-32 md:grid-cols-2">
				<div className="flex flex-col gap-10 lg:justify-between">
					<Title name={heading?.name} subtitle={heading?.subtitle} />
					<Navigator />
				</div>

				<div className="-my-10 overflow-y-scroll scrollbar lg:py-52">
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
		</PageAnimation>
	);
};

export default About;
