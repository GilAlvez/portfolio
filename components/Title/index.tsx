import Link from 'next/link';

interface TitleProps {
	name: string;
	subtitle?: string | null | undefined;
}

const Title = ({ name, subtitle }: TitleProps) => {
	return (
		<div>
			<Link href="/">
				<h1 className="font-medium">{name}</h1>
			</Link>
			<h2 className="transition duration-300 text-zinc-900/60 dark:text-zinc-200/60 font-light">
				{subtitle}
			</h2>
		</div>
	);
};

export default Title;
