'use client';

import { AnimatePresence } from 'framer-motion';

interface LayoutRootProps {
	children: React.ReactNode;
}

const Main = ({ children }: LayoutRootProps) => {
	return (
		<main className="h-full backdrop-blur-3xl lg:backdrop-blur-[90px] backdrop-brightness-[1.15] dark:backdrop-brightness-50 scrollbar overflow-y-scroll border rounded-md p-10 border-zinc-500/50">
			<AnimatePresence mode="wait">{children}</AnimatePresence>
		</main>
	);
};

export default Main;
