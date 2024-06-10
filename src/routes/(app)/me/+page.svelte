<script>
	import Technologies from '../../../components/TechnologyIcon.svelte';
	import ExperienceCard from '../../../components/cards/ExperienceCard.svelte';
	import PersonalHero from '../../../components/heroes/PersonalHero.svelte';
	import RouteHeader from '../../../components/layout/RouteHeader.svelte';
	import Timeline from '../../../components/timeline/Timeline.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Ertugrul Kurnaz</title>
	<meta name="description" content="About Me" />
</svelte:head>

<div>
	<div>
		<RouteHeader title="Ertugrul Kurnaz" />
		<PersonalHero />
	</div>
	<div class="divider" />
	<div>
		<RouteHeader title="Technologies" />
		<div class="grid gap-4 grid-cols-6">
			{#each data.technologies as technology}
				<Technologies {technology} />
			{/each}
		</div>
	</div>
	<div class="divider" />
	<div>
		<RouteHeader title="Timeline" subInformation="(Click on each to read more)" />
		<Timeline />
	</div>
</div>
