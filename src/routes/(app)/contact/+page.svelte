<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact Information" />
</svelte:head>

<div class="flex justify-center">
	<table>
		{#each data.contacts as contact}
			<tr class="hover:scale-125 h-20">
				<td class="w-20">
					<a href={contact.link} target="_blank" rel="noreferrer">
						<svelte:component this={contact.icon} />
					</a>
				</td>
				<td class="text-lg">
					<a href={contact.link} target="_blank" rel="noreferrer">
						{contact.label}
					</a>
				</td>
			</tr>
		{/each}
	</table>
</div>
