'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiEnvelope } from 'react-icons/hi2';

interface ContactListProps {
	contact: {
		email?: string | null | undefined;
		facebook?: string | null | undefined;
		github?: string | null | undefined;
		instagram?: string | null | undefined;
		linkedin?: string | null | undefined;
		whatsapp?: string | null | undefined;
	};
}

const ContactList = ({ contact }: ContactListProps) => {
	const [copied, setCopied] = useState(false);

	const icon = 'p-3 text-6xl rounded-lg bg-zinc-300 dark:bg-primary-500/30';
	const contacts = [
		{
			email: contact.email,
			name: 'Email',
			icon: <HiEnvelope className={icon} />,
		},
		{
			link: contact.linkedin,
			name: 'LinkedIn',
			icon: <FaLinkedinIn className={icon} />,
		},
		{
			link: contact.github,
			name: 'GitHub',
			icon: <FaGithub className={icon} />,
		},
		{
			link: contact.whatsapp,
			name: 'Whatsapp',
			icon: <FaWhatsapp className={icon} />,
		},
		{
			link: contact.instagram,
			name: 'Instagram',
			icon: <FaInstagram className={icon} />,
		},
		{
			link: contact.facebook,
			name: 'Facebook',
			icon: <FaFacebook className={icon} />,
		},
	];

	const container = {
		hidden: {},
		visible: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { y: 50, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="visible"
			className="flex flex-col justify-center gap-4 lg:h-full"
		>
			{contacts.map(
				({ link, name, icon }) =>
					link && (
						<motion.a
							variants={item}
							key={link}
							href={link}
							target="_blank"
							rel="noreferrer noopener"
							className="transition-colors duration-300 rounded-lg w-max hover:bg-zinc-200 hover:dark:bg-primary-900/50"
						>
							<figure className="flex items-center">
								{icon}
								<figcaption className="px-4 text-2xl">{name}</figcaption>
							</figure>
						</motion.a>
					)
			)}
			{contacts[0].email && (
				<motion.div
					variants={item}
					onClick={() => {
						navigator.clipboard.writeText(contacts[0].email as string);
						setCopied(true);
						setTimeout(() => {
							setCopied(false);
						}, 2500);
					}}
					className="transition-colors duration-300 rounded-lg cursor-pointer w-max hover:bg-zinc-200 hover:dark:bg-primary-900/50"
				>
					<figure className="flex items-center">
						{contacts[0].icon}
						<figcaption className="px-4 text-2xl">{copied ? 'Copiado' : contacts[0].name}</figcaption>
					</figure>
				</motion.div>
			)}
		</motion.div>
	);
};

export default ContactList;
