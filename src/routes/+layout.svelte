<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.css';
	import Footer from './Footer.svelte';
	import { darkMode } from '../stores';

	/**
	 * @type {boolean}
	 */
	let isDarkMode;
	darkMode.subscribe((value) => {
		isDarkMode = value;
	});
</script>

<div class={isDarkMode ? 'dark' : 'light'}>
	<div
		class="flex flex-col min-h-screen justify-between main-background bg-slate-100 dark:bg-slate-800 text-text-gray-800 dark:text-gray-200"
	>
		<Header />
		<main
			class="container mx-auto p-8 my-28 backdrop-blur-3xl shadow rounded bg-black/10 dark:bg-white/10"
		>
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style>
	.main-background {
		background-image: radial-gradient(at 43% 39%, hsla(193, 68%, 60%, 0.5) 0px, transparent 50%),
			radial-gradient(at 93% 67%, hsla(59, 100%, 77%, 0.2) 0px, transparent 50%),
			radial-gradient(at 9% 74%, hsla(166, 100%, 77%, 0.2) 0px, transparent 50%),
			radial-gradient(at 80% 16%, hsla(258, 71%, 68%, 0.2) 0px, transparent 50%);
	}
</style>
