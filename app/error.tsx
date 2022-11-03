'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error; reset: () => void }) {
	const router = useRouter();
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<p>
				Ocorreu um error! Tente novamente ou{' '}
				<span className="hover:underline" onClick={() => router.refresh()}>
					recarregue a pagina
				</span>
			</p>
		</div>
	);
}
