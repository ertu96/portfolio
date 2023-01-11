<script>
	import Laptop from '$lib/icons/Laptop.svelte';
	import Place from '$lib/icons/Place.svelte';
	import WorkHistory from '$lib/icons/WorkHistory.svelte';
	import ProfilePicture from '$lib/images/profile-picture.jpg';
	import Technologies from '../../../components/Technologies.svelte';
	import BuwLogo from '$lib/images/buw-logo.png';
	import PlansoLogo from '$lib/images/planso-logo.png';
	import DgnLogo from '$lib/images/dgn-logo.png';
	import ExperienceCard from '../../../components/ExperienceCard.svelte';
</script>

<svelte:head>
	<title>Ertugrul Kurnaz</title>
	<meta name="description" content="About Me" />
</svelte:head>

<div>
	<div>
		<h1 class="text-2xl font-bold mb-4">Ertugrul Kurnaz</h1>
		<div class="hero">
			<div class="hero-content lg:flex-row-reverse gap-12">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img src={ProfilePicture} class="max-h-60 rounded shadow" alt="Profile Picture" />
				<div>
					<dl
						class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
					>
						<div class="flex flex-col pb-3">
							<dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex gap-2">
								<Laptop />
								occupation
							</dt>
							<dd class="text-lg ">Full-Stack Developer</dd>
						</div>
						<div class="flex flex-col py-3">
							<dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex gap-2">
								<WorkHistory />
								since
							</dt>
							<dd class="text-lg ">2019</dd>
						</div>
						<div class="flex flex-col pt-3">
							<dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400 flex gap-2">
								<Place />
								from
							</dt>
							<dd class="text-lg ">Dusseldorf, Germany</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
	<div class="divider" />
	<div>
		<h1 class="text-2xl font-bold mb-4">Technologies</h1>
		<Technologies />
	</div>
	<div class="divider" />
	<div>
		<h1 class="text-2xl font-bold mb-4">Experience</h1>
		<div class="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
			<ExperienceCard
				logo={DgnLogo}
				title="Deutsches Gesundheitsnetz Service GmbH"
				technologies={['React', 'Angular', 'Java']}
				url="https://www.dgn.de/"
			/>
			<ExperienceCard
				logo={PlansoLogo}
				title="PlanSo GmbH"
				technologies={['jQuery', 'PHP', 'MySQL']}
				url="https://www.planso.de/"
			/>
			<ExperienceCard
				logo={BuwLogo}
				title="University of Wupeprtal"
				technologies={['C', 'C++']}
				url="https://www.uni-wuppertal.de/en/"
			/>
		</div>
	</div>
</div>
