<script lang="ts">

	import type { Experience } from '../../interfaces/Experience';
	import Germany from '$lib/icons/country/Germany.svelte';
	import Japan from '$lib/icons/country/Japan.svelte';

	export let experience: Experience;
</script>

<dialog id="timeline-modal" class="modal modal-bottom sm:modal-middle ">
	{#if experience}
		<div class="modal-box dark:bg-black/50 bg-white/10 backdrop-blur-lg">
			<h3 class="font-bold text-lg">{experience.title}</h3>
			<img src={experience.logo} />
			<p>Role: {experience.role}</p>
			<div class="flex items-center gap-x-1">
				<p>Location:</p>
				{#if experience.country === 'de'}
					<Germany />
				{:else if experience.country === 'jp'}
					<Japan />
				{/if}
				{experience.city}
			</div>
			<div>Description:</div>
			<p class="py-4">{experience.description}</p>
			<div class="modal-action">
				<form method="dialog">
					<button class="btn">[x]</button>
				</form>
			</div>
		</div>
	{/if}
</dialog>