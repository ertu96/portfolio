<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	const routes = ['me', 'projects', 'contact', 'about'];

	/**
	 * @type {number}
	 */
	let innerWidth;
</script>

<svelte:window bind:innerWidth />

{#each routes as route}
	<li class="mx-0.5">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label
			class={`cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 dark:hover:text-white  hover:scale-105 text-lg ${
				route === $page.route.id?.split('/').at(-1) ? 'bg-black/20 dark:bg-white/20' : ''
			} `}
			on:click={() => goto(`/${route}`)}
			for={innerWidth < 1024 ? 'my-drawer-3' : ''}
			>{`${route.charAt(0).toUpperCase()}${route.slice(1)}`}</label
		>
	</li>
{/each}
