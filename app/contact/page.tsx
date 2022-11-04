import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';
import Social from '../../components/Social';

const Contact = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
			<div className="flex flex-col justify-between">
				<div>
					<Link href="/">
						<h1 className="">Contato</h1>
					</Link>
				</div>
				<div className="flex flex-col gap-2">
					<Link href="/" className="text-6xl w-max">
						Inicio
					</Link>
					<Link href="/about" className="text-6xl w-max ">
						Sobre
					</Link>
					<Link href="/work" className="text-6xl w-max">
						Trabalho
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="LinkedIn"
					icon={<FaLinkedinIn className="text-5xl p-2 rounded-lg bg-slate-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="Instagram"
					icon={<FaInstagram className="text-5xl p-2 rounded-lg bg-slate-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="Whatsapp"
					icon={<FaWhatsapp className="text-5xl p-2 rounded-lg bg-slate-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="LinkedIn"
					icon={<FaGithub className="text-5xl p-2 rounded-lg bg-slate-500/30" />}
				/>
				<Social
					link="https://www.linkedin.com/in/gildson-alves/"
					name="Email"
					icon={<HiEnvelope className="text-5xl p-2 rounded-lg bg-slate-500/30" />}
				/>
			</div>
		</div>
	);
};

export default Contact;
