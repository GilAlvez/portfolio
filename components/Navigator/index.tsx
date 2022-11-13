'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigator = () => {
	const pathname = usePathname();

	return (
		<nav className="flex justify-center gap-4 lg:flex-col lg:w-fit">
			<Link
				href="/about"
				className={`text-3xl lg:text-7xl hover:opacity-80 ${
					pathname?.startsWith('/about') && '-skew-x-6 text-primary-500 hover:opacity-100 cursor-default'
				}`}
			>
				Sobre
			</Link>
			<Link
				href="/work"
				className={`text-3xl lg:text-7xl hover:opacity-80 ${
					pathname?.startsWith('/work') && '-skew-x-6 text-primary-500 hover:opacity-100 cursor-default'
				}`}
			>
				Trabalhos
			</Link>
			<Link
				href="/contact"
				className={`text-3xl lg:text-7xl hover:opacity-80 ${
					pathname?.startsWith('/contact') && '-skew-x-6 text-primary-500 hover:opacity-100 cursor-default'
				}`}
			>
				Contato
			</Link>
		</nav>
	);
};

export default Navigator;
