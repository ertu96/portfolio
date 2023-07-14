<script>
	import { getProjects } from '../../../api/projects/getProjects';
	import ProjectCard from '../../../components/cards/ProjectCard.svelte';
	import RouteHeader from '../../../components/layout/RouteHeader.svelte';
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="List of my work" />
</svelte:head>

<RouteHeader title="GitHub Repositories" />
{#await getProjects()}
	<div class="flex justify-center">
		<span class="loading  loading-ring loading-lg" />
	</div>
{:then projects}
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
{/await}
