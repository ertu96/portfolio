<script>
	import Header from '../components/Header.svelte';
	import './styles.css';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
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
		class="flex flex-col min-h-screen justify-between main-background bg-slate-100 dark:bg-slate-900 text-text-gray-800 dark:text-gray-200"
	>
		<div class="drawer">
			<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				<Header />
				<!-- Page content -->
				<main class="p-8 my-20 container mx-auto backdrop-blur-3xl bg-white/10 dark:bg-black/10">
					<slot />
				</main>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-3" class="drawer-overlay" />
				<ul
					class="menu p-4 w-80 bg-gray-50/30 dark:bg-gray-900/30 text-gray-900 dark:text-gray-50 backdrop-blur-lg"
				>
					<!-- Sidebar -->
					<li><a href="/me" class="cursor-pointer">Me</a></li>
					<li><a href="/work" class="cursor-pointer">Projects</a></li>
					<li><a href="/contact" class="cursor-pointer">Contact</a></li>
					<li><a href="/about" class="cursor-pointer">About</a></li>
				</ul>
			</div>
		</div>
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
