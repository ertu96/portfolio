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
