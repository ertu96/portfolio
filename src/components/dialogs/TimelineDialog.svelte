<script lang="ts">

	import type { Experience } from '../../interfaces/Experience';

	export let experience: Experience;
</script>

<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
	{#if experience}
		<div class="modal-box dark:bg-black">
			<h3 class="font-bold text-lg">{experience.title}</h3>
			<p>Role: {experience.role}</p>
			<p>Location: {experience.country} {experience.city}</p>

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