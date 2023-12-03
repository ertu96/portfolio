import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { VitePluginRadar } from 'vite-plugin-radar';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		VitePluginRadar({
			analytics: {
				id: 'G-4NEXNWV58N'
			}
		})
	],
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
