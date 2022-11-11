import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import PageAnimation from '../../components/Animate/PageAnimation';
import Navigator from '../../components/Navigator';
import Social from '../../components/Social';
import Title from '../../components/Title';
import { client } from '../../libs/graphql/client';
import { getOwnerContact, getOwnerHeading } from '../../libs/graphql/queries/owner';

const Contact = async () => {
	const {
		owners: [heading],
	} = await client.request(getOwnerHeading);
	const {
		owners: [contact],
	} = await client.request(getOwnerContact);

	const { email, facebook, github, instagram, linkedin, whatsapp } = contact.social;

	return (
		<PageAnimation>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
				<div className="flex flex-col justify-between">
					<Title name={heading?.name} subtitle={heading?.subtitle} />
					<Navigator />
				</div>
				<div className=" flex flex-col justify-center gap-4">
					{linkedin && (
						<Social
							link={linkedin}
							name="LinkedIn"
							icon={<FaLinkedinIn className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
						/>
					)}
					{instagram && (
						<Social
							link={instagram}
							name="Instagram"
							icon={<FaInstagram className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
						/>
					)}
					{whatsapp && (
						<Social
							link={whatsapp}
							name="Whatsapp"
							icon={<FaWhatsapp className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
						/>
					)}
					{github && (
						<Social
							link={github}
							name="GitHub"
							icon={<FaGithub className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
						/>
					)}
					{facebook && (
						<Social
							link={facebook}
							name="Facebook"
							icon={<FaFacebook className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
						/>
					)}
					{email && (
						<Social
							link={'mailto:gildson_af@outlook.com?subject=Front-end%20Developer'}
							name="Email"
							icon={<HiEnvelope className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
						/>
					)}
				</div>
			</div>
		</PageAnimation>
	);
};

export default Contact;
