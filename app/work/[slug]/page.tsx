/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

interface WorkBySlugPage {
	params: {
		slug: string;
	};
}

const WorkBySlug = ({ params }: WorkBySlugPage) => {
	return (
		<>
			<figure className="-mx-10 -mt-10 h-40 relative brightness-90 select-none">
				<Image src={'/Dashboard.jpg'} alt="Banner do projeto" className="object-cover" fill priority />
			</figure>
			<section className="rich-text py-12 flex flex-col items-center gap-8">
				<h1>{params.slug}</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis amet rerum dignissimos
					quo quas tempore, <a>illum sed nisi</a>. Consequuntur deserunt vero veniam voluptates quas est a
					aut, ullam tempore.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis amet rerum dignissimos
					quo quas tempore, <a>illum sed nisi</a>. asf Consequuntur deserunt vero veniam voluptates quas est a
					aut, ullam tempore.
				</p>
				<img src="/Dashboard.jpg" alt="Gildson Foto" />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis amet rerum dignissimos
					quo quas tempore, <a>illum sed nisi</a>. asf Consequuntur deserunt vero veniam voluptates quas est a
					aut, ullam tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis
					amet rerum dignissimos quo quas tempore, <a>illum sed nisi</a>. asf Consequuntur deserunt vero
					veniam voluptates quas est a aut, ullam tempore.
				</p>
			</section>
		</>
	);
};

export default WorkBySlug;
