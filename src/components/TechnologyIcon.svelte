<script>
	/**
	 * @type {{ page: string; svg: string; alt: string; }}
	 */
	export let technology;
</script>

<a href={technology.page} target="_blank" rel="noreferrer" class="h-[40px] w-[40px]">
	<img
		src={technology.svg}
		alt={technology.alt}
		width="40"
		height="40"
		class="hover:scale-150"
		loading="lazy"
	/>
</a>
