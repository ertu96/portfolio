<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import { dataset_dev } from 'svelte/internal';

	const projects = {
		data: [],
		loading: false,
		error: false
	};

	onMount(async () => {
		try {
			projects.loading = true;
			const response = await axios.get(
				`/github/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos`
			);
			// @ts-ignore
			projects.data.push(...response.data);
		} catch (error) {
			console.error(error);
			projects.error = true;
		} finally {
			projects.loading = false;
		}
	});
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="List of my work" />
</svelte:head>

{#if !projects.loading && !projects.error && projects.data.length}
	{#each projects.data as project}
		<div class="card w-full shadow-xl">
			<div class="card-body">
				<h2 class="card-title">{project.name}</h2>
				<p>{project.description}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary btn-sm glass">See on GitHub</button>
				</div>
			</div>
		</div>
	{/each}
{:else if projects.loading}
	<p>...loading</p>
{:else if projects.error}
	<p>Error</p>
{:else}
	<p>No projects</p>
{/if}
