import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	envDir: 'env',
	server: {
		proxy: {
			'/github': {
				target: 'https://api.github.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/github/, '')
			}
		}
	}
};

export default config;
