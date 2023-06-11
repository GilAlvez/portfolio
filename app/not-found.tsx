import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '404 - Página não encontrada',
};

export default function NotFound() {
	return (
		<section className="grid place-items-center">
			<h1>404</h1>
			<h2>Página não encontrada</h2>
			<Link className="px-4 py-2 mt-12 text-xl text-white rounded bg-primary-600" href="/">
				Voltar para a tela inicial
			</Link>
		</section>
	);
}
