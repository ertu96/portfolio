<script>
	/**
	 * @type {string}
	 */
	export let logo;

	/**
	 * @type {string}
	 */
	export let title;

	/**
	 * @type {string[]}
	 */
	export let technologies;

	/**
	 * @type {string}
	 */
	export let url;
</script>

<a
	href={url}
	target="_blank"
	rel="noreferrer"
	class="card lg:card-side bg-black/10 dark:bg-white/10 w-full hover:scale-105 hover:no-underline cursor-pointer"
>
	<figure class="w-2/5"><img src={logo} alt={title} /></figure>
	<div class="card-body">
		<h2 class="card-title">{title}</h2>
		<p>Full-Stack Developer</p>
		<div class="divider my-0" />
		<ul class="list-disc">
			{#each technologies as technology}
				<li class="text-sm">{technology}</li>
			{/each}
		</ul>
	</div>
</a>
