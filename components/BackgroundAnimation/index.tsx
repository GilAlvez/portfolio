import { MixedCircle } from './styles';

const BackgroundAnimation = () => {
	return (
		<div className="relative opacity-40 dark:opacity-95">
			<MixedCircle className="top-0 right-0 bg-secondary-500 dark:bg-secondary-900" />
			<MixedCircle className="top-24 right-0 bg-zinc-500" />
			<MixedCircle className="top-52 right-0 bg-primary-500" />
		</div>
	);
};

export default BackgroundAnimation;
