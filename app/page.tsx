import Navigator from '../components/Navigator';
import Title from '../components/Title';

export default async function Page() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
			<div className="flex flex-col justify-between">
				<Title />
				<Navigator />
			</div>

			<div></div>
		</div>
	);
}
