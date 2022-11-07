import Navigator from '../../components/Navigator';
import Title from '../../components/Title';
import { AboutImage } from './styles';

const About = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-32 h-full">
			<div className="flex flex-col justify-between">
				<Title />
				<Navigator />
			</div>
			<div className="overflow-y-scroll scrollbar lg:py-52 -my-10">
				<figure className="bg-primary-500/80 relative mx-auto mb-10 w-80 aspect-square rounded-lg">
					<AboutImage
						src={'/AboutMe.jpg'}
						alt="Gildson Foto"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</figure>
				<div className="rich-text flex flex-col items-center gap-4">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor, ut consequuntur quis,
						numquam molestiae esse <a>doloremque</a> reiciendis obcaecati, nemo quae Doloribus deserunt ut
						iure culpa aperiam iste cumque autem?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor, ut consequuntur quis,
						numquam molestiae esse <a>doloremque</a> reiciendis obcaecati, nemo quae! Doloribus deserunt ut
						iure culpa aperiam iste cumque autem?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolor, ut consequuntur quis,
						numquam molestiae esse <a>doloremque</a> reiciendis obcaecati, nemo quae Doloribus deserunt ut
						iure culpa aperiam iste cumque autem?
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
