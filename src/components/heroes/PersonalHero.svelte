<script>
	import Laptop from '$lib/icons/Laptop.svelte';
	import Place from '$lib/icons/Place.svelte';
	import WorkHistory from '$lib/icons/WorkHistory.svelte';
	import ProfilePicture from '$lib/images/profile-picture.jpeg';

	const personalHeroRows = [
		{
			icon: Laptop,
			header: 'occupation',
			title: 'Full-Stack Developer'
		},
		{
			icon: WorkHistory,
			header: 'since',
			title: '2019'
		},
		{
			icon: Place,
			header: 'from',
			title: 'Dusseldorf, Germany'
		}
	];
</script>

<div class="hero">
	<div class="hero-content lg:flex-row-reverse gap-12">
		<div class="h-60 w-40">
			<img
				src={ProfilePicture}
				class=" shadow rounded-sm"
				alt="Profile Potrait"
				loading="lazy"
			/>
		</div>

		<div>
			<dl
				class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 flex flex-col justify-between gap-y-2"
			>
				{#each personalHeroRows as row}
					<div class="flex flex-col">
						<dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex gap-2">
							<svelte:component this={row.icon} />
							{row.header}
						</dt>
						<dd class="text-lg">{row.title}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
