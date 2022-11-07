import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import Navigator from '../../components/Navigator';
import Social from '../../components/Social';
import Title from '../../components/Title';

const Contact = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
			<div className="flex flex-col justify-between">
				<Title />
				<Navigator />
			</div>
			<div className=" flex flex-col justify-center gap-4">
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="LinkedIn"
					icon={<FaLinkedinIn className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="Instagram"
					icon={<FaInstagram className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="Whatsapp"
					icon={<FaWhatsapp className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="LinkedIn"
					icon={<FaGithub className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="Email"
					icon={<HiEnvelope className="text-6xl p-3 rounded-lg bg-zinc-300 dark:bg-primary-500/30" />}
				/>
			</div>
		</div>
	);
};

export default Contact;
