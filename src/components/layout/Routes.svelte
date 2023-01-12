<script>
	import { page } from '$app/stores';
	const routes = ['me', 'projects', 'contact', 'about'];
</script>

{#each routes as route}
	<li>
		<a
			href={`/${route}`}
			class={`cursor-pointer ${
				route === $page.route.id?.split('/').at(-1) ? 'bg-black/20  underline' : ''
			} `}>{`${route.charAt(0).toUpperCase()}${route.slice(1)}`}</a
		>
	</li>
{/each}
