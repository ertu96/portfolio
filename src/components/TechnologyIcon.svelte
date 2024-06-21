<script>
	/**
	 * @type {{ page: string; svg: string; alt: string; }}
	 */
	export let technology;
</script>

<a href={technology.page} target="_blank" rel="noreferrer" class="h-[45px] w-[45px]">
	<img
		src={technology.svg}
		alt={technology.alt}
		width="45"
		height="45"
		class="hover:scale-150"
		loading="lazy"
	/>
</a>
