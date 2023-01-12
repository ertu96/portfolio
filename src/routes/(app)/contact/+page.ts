import type { PageLoad } from './$types';
import At from '$lib/icons/At.svelte';
import Github from '$lib/icons/Github.svelte';
import Instagram from '$lib/icons/Instagram.svelte';
import Linkedin from '$lib/icons/Linkedin.svelte';

export const load = (() => {
	return {
		contacts: [
			{
				label: 'Ertugrul Kurnaz',
				icon: Linkedin,
				link: 'https://www.linkedin.com/in/ertugrul-kurnaz-54ab08196/'
			},
			{
				label: 'ertu96',
				icon: Github,
				link: 'https://github.com/ertu96'
			},
			{
				label: '@ertu.xo',
				icon: Instagram,
				link: 'https://www.instagram.com/ertu.xo/'
			},
			{
				label: 'ertugrul-kurnaz@outlook.com',
				icon: At,
				link: 'mailto:ertugrul-kurnaz@outlook.com'
			}
		]
	};
}) satisfies PageLoad;

export const prerender = 'auto';
export const csr = true;
export const ssr = false;
