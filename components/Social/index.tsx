import { ReactNode } from 'react';

interface SocialProps {
	link: string;
	icon: ReactNode;
	name: string;
}

const Social = ({ link, icon, name }: SocialProps) => {
	return (
		<a className="w-max" href={link} target="_blank" rel="noreferrer noopener">
			<figure className="flex gap-4 items-center">
				{icon}
				<figcaption className="text-xl">{name}</figcaption>
			</figure>
		</a>
	);
};

export default Social;
