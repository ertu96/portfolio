<script>
	import LogoWhite from '$lib/images/logo-white.png';
	import LogoBlack from '$lib/images/logo-black.png';
</script>

<div class="dark bg-slate-900 text-gray-200 backdrop-blur-3xl">
	<div class=" min-h-screen justify-between main-background bg-black/30">
		<main class="container mx-auto">
			<slot />
		</main>
	</div>
</div>

<style>
	.main-background {
		background-image: radial-gradient(at 43% 39%, hsla(193, 68%, 60%, 0.5) 0px, transparent 50%),
			radial-gradient(at 93% 67%, hsla(59, 100%, 77%, 0.2) 0px, transparent 50%),
			radial-gradient(at 9% 74%, hsla(166, 100%, 77%, 0.2) 0px, transparent 50%),
			radial-gradient(at 80% 16%, hsla(258, 71%, 68%, 0.2) 0px, transparent 50%);
	}
</style>
