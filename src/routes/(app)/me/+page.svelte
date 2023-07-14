<script>
	import Technologies from '../../../components/TechnologyIcon.svelte';
	import ExperienceCard from '../../../components/cards/ExperienceCard.svelte';
	import PersonalHero from '../../../components/heroes/PersonalHero.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Ertugrul Kurnaz</title>
	<meta name="description" content="About Me" />
</svelte:head>

<div>
	<div>
		<h1 class="text-2xl font-bold mb-4 text-center">Ertugrul Kurnaz</h1>
		<PersonalHero />
	</div>
	<div class="divider" />
	<div>
		<h1 class="text-2xl font-bold mb-4 text-center">Technologies</h1>
		<div class="grid gap-4 grid-cols-6">
			{#each data.technologies as technology}
				<Technologies {technology} />
			{/each}
		</div>
	</div>
	<div class="divider" />
	<div>
		<h1 class="text-2xl font-bold mb-4 text-center">Experience</h1>
		<div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
			{#each data.experiences as experience}
				<ExperienceCard
					logo={experience.logo}
					title={experience.title}
					technologies={experience.technologies}
					role={experience.role}
					url={experience.url}
				/>
			{/each}
		</div>
	</div>
</div>
