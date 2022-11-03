'use client';

import { CgDarkMode } from 'react-icons/cg';

const ToggleTheme = () => {
	const handleTheme = () => {
		document.documentElement.classList.toggle('dark');
	};

	return (
		<button className="p-2 text-xl hover:bg-slate-500/40" onClick={handleTheme}>
			<CgDarkMode />
		</button>
	);
};

export default ToggleTheme;
