'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigator = () => {
	const pathname = usePathname();

	return (
		<nav className="flex flex-col gap-3 w-fit">
			<Link
				href="/about"
				className={`text-5xl lg:text-7xl hover:italic ${pathname?.startsWith('/about') && 'italic'}`}
			>
				Sobre
			</Link>
			<Link
				href="/work"
				className={`text-5xl lg:text-7xl hover:italic ${pathname?.startsWith('/work') && 'italic'}`}
			>
				Trabalhos
			</Link>
			<Link
				href="/contact"
				className={`text-5xl lg:text-7xl hover:italic ${pathname?.startsWith('/contact') && 'italic'}`}
			>
				Contato
			</Link>
		</nav>
	);
};

export default Navigator;
