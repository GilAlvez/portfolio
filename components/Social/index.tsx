import { ReactNode } from 'react';

interface SocialProps {
	link: string;
	icon: ReactNode;
	name: string;
}

const Social = ({ link, icon, name }: SocialProps) => {
	return (
		<a
			className="w-max rounded-lg hover:bg-slate-200 hover:dark:bg-slate-800"
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
