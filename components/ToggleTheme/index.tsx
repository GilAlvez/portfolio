'use client';

import { CgDarkMode } from 'react-icons/cg';

const ToggleTheme = () => {
	const handleTheme = () => {
		document.documentElement.classList.toggle('dark');
	};

	return (
		<button className="outline-0 p-2 text-xl hover:bg-zinc-500/40" onClick={handleTheme}>
			<CgDarkMode />
		</button>
	);
};

export default ToggleTheme;
