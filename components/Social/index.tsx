import { ReactNode } from 'react';

interface SocialProps {
	link: string;
	icon: ReactNode;
	name: string;
}

const Social = ({ link, icon, name }: SocialProps) => {
	return (
		<a
			className="w-max rounded-lg hover:bg-zinc-200 hover:dark:bg-primary-900/50 transition"
			href={link}
			target="_blank"
			rel="noreferrer noopener"
		>
			<figure className="flex items-center">
				{icon}
				<figcaption className="text-2xl px-4">{name}</figcaption>
			</figure>
		</a>
	);
};

export default Social;
