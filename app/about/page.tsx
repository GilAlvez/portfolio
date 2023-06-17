import sanitizeHtml from 'sanitize-html';
import FadeIn from '../../components/Animation/FadeIn';
import { client } from '../../services/graphql/client';
import { getOwnerAbout } from '../../services/graphql/queries/owner';
import { AboutImage } from './styles';

const About = async () => {
	const {
		owners: [about],
	} = await client.request(getOwnerAbout);

	return (
		<FadeIn>
			<div className=" lg:pt-44 lg:pb-20">
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
					className="rich-text"
					dangerouslySetInnerHTML={{ __html: sanitizeHtml(about.description.html) }}
				/>
			</div>
		</FadeIn>
	);
};

export default About;
