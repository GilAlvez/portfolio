/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { BsArrowUpRight } from 'react-icons/bs';

interface WorkBySlugPage {
	params: {
		slug: string;
	};
}

const WorkBySlug = ({ params }: WorkBySlugPage) => {
	return (
		<>
			{/* BANNER */}
			<figure className="-mx-10 -mt-10 h-40 relative brightness-90 select-none">
				<Image src={'/Dashboard.jpg'} alt="Banner do projeto" className="object-cover" fill priority />
			</figure>
			<div className="flex flex-col gap-8 py-8 container mx-auto lg:px-32 2xl:px-52">
				{/* TITLE */}
				<h1>{params.slug}</h1>
				<hr />
				<div className="grid grid-cols-2 gap-8">
					<div className="flex gap-5">
						<ol className="flex flex-col gap-4">
							<li>Lançamento</li>
							<li>Atribuições</li>
							<li>Tecnologias</li>
						</ol>
						<ol className="flex flex-col gap-4">
							<li>2022</li>
							<li>Tech Leader, Designer</li>
							<li>React, Typescript</li>
						</ol>
					</div>

					<div className="flex flex-col gap-4">
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quisquam necessitatibus aperiam
							illum, vero, praesentium vitae assumenda repellat laborum dolorem deserunt sed commodi! Quas
							voluptate nostrum error illum facilis corporis?
						</p>
						<a
							className="text-lg flex items-center gap-2 w-max"
							href="www.google.com.br"
							target="_blank"
							rel="noreferrer noopener"
						>
							<span>www.google.com.br</span>
							<BsArrowUpRight />
						</a>
					</div>
				</div>
				<hr />

				{/* RICH TEXT */}
				<section className="rich-text flex flex-col items-center gap-8">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis amet rerum
						dignissimos quo quas tempore, <a>illum sed nisi</a>. Consequuntur deserunt vero veniam voluptates
						quas est a aut, ullam tempore.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis amet rerum
						dignissimos quo quas tempore, <a>illum sed nisi</a>. asf Consequuntur deserunt vero veniam
						voluptates quas est a aut, ullam tempore.
					</p>
					<img src="/Dashboard.jpg" alt="Gildson Foto" />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis amet rerum
						dignissimos quo quas tempore, <a>illum sed nisi</a>. asf Consequuntur deserunt vero veniam
						voluptates quas est a aut, ullam tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis veritatis amet rerum dignissimos quo quas tempore, <a>illum sed nisi</a>. asf
						Consequuntur deserunt vero veniam voluptates quas est a aut, ullam tempore.
					</p>
				</section>
				<span className="text-end">{new Date().toLocaleString()}</span>
			</div>
		</>
	);
};

export default WorkBySlug;
