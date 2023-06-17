import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '404 - Página não encontrada',
};

export default function NotFound() {
	return (
		<section className="flex flex-col items-center justify-center h-full">
			<h2 className="text-9xl">404</h2>
			<h3>Página não encontrada</h3>
		</section>
	);
}
