<script>
	import LightMode from '$lib/icons/light-mode.svg';
	import DarkMode from '$lib/icons/dark-mode.svg';
	import { darkMode } from '../stores';

	/**
	 * @type {boolean}
	 */
	let isDarkMode;

	darkMode.subscribe((value) => {
		isDarkMode = value;
	});

	const toggleDarkMode = () => {
		darkMode.update((prev) => !prev);
	};
</script>

<nav
	class="bg-gray-50/70 dark:bg-gray-900/70 text-gray-900 dark:text-gray-50 backdrop-blur-lg fixed z-20 w-full top-0 left-0 py-2 drop-shadow-sm"
>
	<div class="container px-4 my-2 flex flex-wrap justify-between items-center mx-auto">
		<div>Ertugrul Kurnaz</div>
		<div class="flex gap-6">
			<div class="cursor-pointer">Home</div>
			<div class=" cursor-pointer">My work</div>
			<div class=" cursor-pointer">About</div>
		</div>
		<button
			class="btn btn-sm btn-outline dark:bg-gray-50 dark:hover:bg-transparent dark:hover:border-gray-50 dark:border-gray-900 text-black mx-1 w-10"
			on:click={toggleDarkMode}
		>
			<img src={isDarkMode ? DarkMode : LightMode} alt="Toggle Dark Mode" />
		</button>
	</div>
	<div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" />
</nav>
