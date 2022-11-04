import Image from 'next/image';
import Link from 'next/link';

const About = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
			<div className="flex flex-col justify-between">
				<div>
					<h1 className="">Sobre</h1>
				</div>
				<div className="flex flex-col gap-2">
					<Link href="/" className="text-6xl w-max">
						Inicio
					</Link>
					<Link href="/work" className="text-6xl w-max ">
						Trabalho
					</Link>
					<Link href="/contact" className="text-6xl w-max">
						Contato
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-8 justify-center items-center">
				<figure className="relative h-80 w-80 object-cover">
					<Image fill src={'/AboutMe.jpg'} alt="Gildson Foto" priority />
				</figure>
				<p className="text-xl text-center w-2/3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor, ut consequuntur quis, numquam
					molestiae esse doloremque reiciendis obcaecati, nemo quae! Doloribus deserunt ut iure culpa aperiam
					iste cumque autem?
				</p>
			</div>
		</div>
	);
};

export default About;
