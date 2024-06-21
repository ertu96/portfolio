<svelte:head>
	<script defer src="https://cloud.umami.is/script.js" data-website-id="4f236b42-7fd6-4fde-9666-1e6f83824b2f"></script>
</svelte:head>

<script>
	import Header from '../../components/layout/Header.svelte';
	import Footer from '../../components/layout/Footer.svelte';
	import { Theme, theme } from '../../stores';
	import Routes from '../../components/layout/Routes.svelte';
	import LogoWhite from '$lib/images/logo-white.png';
	import LogoBlack from '$lib/images/logo-black.png';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';


	/**
	 * @type {boolean}
	 */
	let isDarkMode;
	theme.subscribe((value) => {
		isDarkMode = value === Theme.DARK;
	});

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });

</script>

<div class={isDarkMode ? 'dark' : 'light'}>
	<div
		class="flex flex-col min-h-screen justify-between main-background bg-slate-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200"
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
					class="menu p-4 w-80 bg-gray-50/30 dark:bg-gray-900/30 text-gray-900 dark:text-gray-50 backdrop-blur-lg mt-20 h-calc-screen-minus-margin"
				>
					<li>
						<div class="flex justify-center">
							<img
								src={isDarkMode ? LogoWhite : LogoBlack}
								alt="Header Logo"
								class="h-32 w-32 px-2 mx-2"
								loading="lazy"
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
