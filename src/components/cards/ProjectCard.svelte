<script>
	import { getLanguages } from '../../api/languages/getLanguages';
	import LanguageChip from '../chips/LanguageChip.svelte';

	/**
	 * @type {import("../../interfaces/Project").Project}
	 */
	export let project;
</script>

<div class="card w-full border mt-4 border-gray-800 dark:border-gray-200">
	<div class="card-body">
		<h2 class="card-title">{project.name}</h2>
		<p>{project.description}</p>
		{#await getLanguages(project.languages_url)}
			<div class="flex justify-center">
				<span class="loading loading-ring loading-xs" />
			</div>
		{:then languages}
			<div class="flex gap-2 flex-wrap">
				{#each languages || [] as language}
					<LanguageChip {language} />
				{/each}
			</div>
		{/await}
		<div class="card-actions justify-end">
			<a class="btn btn-primary btn-sm " href={project.html_url} target="_blank" rel="noreferrer"
				>open on GitHub</a
			>
		</div>
	</div>
</div>
