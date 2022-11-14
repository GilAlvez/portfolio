'use client';

import { RiContrast2Fill } from 'react-icons/ri';

const ToggleTheme = () => {
	const handleTheme = () => {
		document.documentElement.classList.toggle('dark');
	};

	return (
		<button className="p-2 text-xl outline-0 hover:bg-zinc-500/40" onClick={handleTheme}>
			<RiContrast2Fill />
		</button>
	);
};

export default ToggleTheme;
