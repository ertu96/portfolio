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
