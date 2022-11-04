const WorkCard = () => {
	return (
		<section className="group cursor-pointer">
			<div className="group-hover:border-b">
				<h6>2022 / Produção</h6>
				<h2>Contabil Conectada</h2>
			</div>

			<div className="py-4 px-2 hidden group-hover:block">
				<p className="line-clamp-2 mb-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus et dolorum quo earum distinctio
					reiciendis itaque placeat quis ex quasi aperiam, fuga ratione iusto, laboriosam tenetur? Doloribus
					tempora magni vero! Lorem.
				</p>
				<div className="flex flex-wrap gap-4">
					<span className="bg-slate-500/40 px-2">React</span>
					<span className="bg-slate-500/40 px-2">Typescript</span>
				</div>
			</div>
		</section>
	);
};

export default WorkCard;
