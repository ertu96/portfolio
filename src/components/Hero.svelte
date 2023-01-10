<script>
	import Check from '$lib/icons/Check.svelte';

	const technologies = ['SvelteKit', 'TypeScript', 'Vite', 'Tailwindcss', 'DaisyUI'];
</script>

<div class="hero ">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="text-4xl font-bold">Welcome to my portfolio</h1>
			<p class="py-4">This site was built using following Tech-Stack</p>
			<div class="flex justify-center">
				<ul class="mb-8 space-y-4 ">
					{#each technologies as tech}
						<li class="flex items-center space-x-3">
							<Check />
							<span>{tech}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
