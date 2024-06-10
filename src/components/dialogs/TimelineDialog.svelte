<script lang="ts">

	import type { Experience } from '../../interfaces/Experience';
	import Germany from '$lib/icons/country/Germany.svelte';
	import Japan from '$lib/icons/country/Japan.svelte';
	import LanguageChip from '../chips/LanguageChip.svelte';

	export let experience: Experience;
</script>

<dialog id="timeline-modal" class="modal modal-bottom sm:modal-middle">
	{#if experience}
		<div class="modal-box bg-gray-300/60 dark:bg-gray-700/60 backdrop-blur-xl">
			<div class="flex justify-between items-center">
				<h3 class="font-bold text-lg">{experience.title}</h3>
				<div class="modal-action mt-0">
					<form method="dialog">
						<button class="btn btn-ghost">[x]</button>
					</form>
				</div>
			</div>
			<a href={experience.url} target="_blank">
				<img src={experience.logo} class="m-2" />
			</a>
			<div class="divider"></div>
			<table class="w-full table">
				<tr>
					<td>Role</td>
					<td>{experience.role}</td>
				</tr>
				<tr>
					<td>Active</td>
					<td>{experience.duration}</td>
				</tr>
				<tr>
					<td>Stack</td>
					<td class="flex gap-1">
						{#each experience.technologies as language}
							<LanguageChip language={language} />
						{/each}
					</td>
				</tr>
				<tr>
					<td>Location</td>
					<td class="flex items-center gap-x-1">
						{#if experience.country === 'de'}
							<Germany />
						{:else if experience.country === 'jp'}
							<Japan />
						{/if}
						{experience.city}
					</td>
				</tr>
			</table>
			<div class="divider"></div>
			<p class="py-4">{experience.description}</p>


		</div>
	{/if}
</dialog>