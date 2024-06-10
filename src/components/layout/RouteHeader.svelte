<script>
	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string}
	 */
	export let subInformation = '';

</script>


<div class="text-center mb-4">
	<h1 class="text-2xl font-bold ">{title}</h1>
	{#if subInformation}
		<p>{subInformation}</p>
	{/if}
</div>
