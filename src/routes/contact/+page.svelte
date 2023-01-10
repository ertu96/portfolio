<script>
	import At from '$lib/icons/At.svelte';
	import Github from '$lib/icons/Github.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import Linkedin from '$lib/icons/Linkedin.svelte';

	const contacts = [
		{
			label: 'Ertugrul Kurnaz',
			icon: Linkedin,
			link: 'https://www.linkedin.com/in/ertugrul-kurnaz-54ab08196/'
		},
		{
			label: 'ertu96',
			icon: Github,
			link: 'https://github.com/ertu96'
		},
		{
			label: '@ertu.xo',
			icon: Instagram,
			link: 'https://www.instagram.com/ertu.xo/'
		},
		{
			label: 'ertugrul-kurnaz@outlook.com',
			icon: At,
			link: 'mailto:ertugrul-kurnaz@outlook.com'
		}
	];
</script>

<div class="flex justify-center">
	<table>
		{#each contacts as contact}
			<tr class="hover:scale-125 h-20">
				<td class="w-20">
					<a href={contact.link} target="_blank" rel="noreferrer">
						<svelte:component this={contact.icon} />
					</a>
				</td>
				<td class="text-lg">
					<a href={contact.link} target="_blank" rel="noreferrer">
						{contact.label}
					</a>
				</td>
			</tr>
		{/each}
	</table>
</div>
