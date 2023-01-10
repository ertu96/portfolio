<script>
	import Laptop from '$lib/icons/Laptop.svelte';
	import Place from '$lib/icons/Place.svelte';
	import WorkHistory from '$lib/icons/WorkHistory.svelte';
	import ProfilePicture from '$lib/images/profile-picture.jpg';
</script>

<div>
	<div class="hero">
		<div class="hero-content lg:flex-row-reverse gap-12">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={ProfilePicture} class="max-h-60 rounded shadow" alt="Profile Picture" />
			<div>
				<h1 class="text-2xl font-bold mb-4">Ertugrul Kurnaz</h1>

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
						<dd class="text-lg ">Germany, Dusseldorf</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</div>
