import Image from 'next/image';
import Navigator from '../../components/Navigator';
import Title from '../../components/Title';

const About = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
			<div className="flex flex-col justify-between">
				<Title />
				<Navigator />
			</div>
			<div className="flex flex-col gap-8 justify-center items-center ">
				<figure className="relative h-80 w-80 object-cover">
					<Image
						src={'/AboutMe.jpg'}
						alt="Gildson Foto"
						fill
						priority
						className="rounded-md"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</figure>
				<div className="rich-text flex flex-col items-center gap-4">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor, ut consequuntur quis,
						numquam molestiae esse <a>doloremque</a> reiciendis obcaecati, nemo quae! Doloribus deserunt ut
						iure culpa aperiam iste cumque autem?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor, ut consequuntur quis,
						numquam molestiae esse <a>doloremque</a> reiciendis obcaecati, nemo quae! Doloribus deserunt ut
						iure culpa aperiam iste cumque autem?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor, ut consequuntur quis,
						numquam molestiae esse <a>doloremque</a> reiciendis obcaecati, nemo quae! Doloribus deserunt ut
						iure culpa aperiam iste cumque autem?
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
