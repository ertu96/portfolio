import type { PageLoad } from './$types';

export const load = (() => {
	return {
		technologies: ['SvelteKit', 'TypeScript', 'Vite', 'Tailwindcss', 'DaisyUI']
	};
}) satisfies PageLoad;

export const prerender = 'auto';
export const csr = true;
export const ssr = false;
