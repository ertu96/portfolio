<script>
	import Technologies from '../../../components/TechnologyIcon.svelte';
	import ExperienceCard from '../../../components/cards/ExperienceCard.svelte';
	import PersonalHero from '../../../components/heroes/PersonalHero.svelte';
	import RouteHeader from '../../../components/layout/RouteHeader.svelte';

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
		<RouteHeader title="Experience" />
		<div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
			{#each data.experiences as experience}
				<ExperienceCard
					logo={experience.logo}
					title={experience.title}
					technologies={experience.technologies}
					url={experience.url}
				/>
			{/each}
		</div>
	</div>
</div>
