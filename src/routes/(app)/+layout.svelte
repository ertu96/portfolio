<script>
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import { darkMode } from '../../stores';
	import Routes from '../../components/Routes.svelte';
	import LogoWhite from '$lib/images/logo-white.png';
	import LogoBlack from '$lib/images/logo-black.png';

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
				<main class="p-8 my-20 container mx-auto backdrop-blur-3xl bg-white/10 dark:bg-black/10">
					<slot />
				</main>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-3" class="drawer-overlay" />
				<ul
					class="menu p-4 w-80 bg-gray-50/30 dark:bg-gray-900/30 text-gray-900 dark:text-gray-50 backdrop-blur-lg"
				>
					<li>
						<div class="flex justify-center">
							<img
								src={isDarkMode ? LogoWhite : LogoBlack}
								alt="Header Logo"
								class="h-32 w-32 px-2 mx-2"
							/>
						</div>
					</li>
					<Routes />
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
