import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import WorkCard from '../../components/WorkCard';

const Work = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
			<div className="flex flex-col justify-between">
				<Title />
				<Navigator />
			</div>
			<div className="flex flex-col overflow-y-scroll scrollbar -my-10 py-52 gap-8">
				<WorkCard link="/work/test1" />
				<WorkCard link="/work/test2" />
				<WorkCard link="/work/test3" />
				<WorkCard link="/work/test4" />
				<WorkCard link="/work/test1" />
				<WorkCard link="/work/test2" />
				<WorkCard link="/work/test3" />
				<WorkCard link="/work/test4" />
				<WorkCard link="/work/test1" />
				<WorkCard link="/work/test2" />
				<WorkCard link="/work/test3" />
			</div>
		</div>
	);
};

export default Work;
