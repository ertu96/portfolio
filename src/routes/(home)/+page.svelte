<script>
	import LogoWhite from '$lib/images/logo-white.png';
</script>

<svelte:head>
	<title>Welcome</title>
	<meta name="description" content="Welcome to my portfolio" />
</svelte:head>

<div class="grid justify-items-center gap-y-10 p-10">
	<div class="h-[25vh]">
		<img class="max-h-full" src={LogoWhite} alt="Ertugrul Kurnaz" />
	</div>
	<div class="text-center text-4xl">Welcome to my portfolio</div>
	<a href="/me">
		<button class="btn btn-wide btn-ghost btn-lg">Enter Page</button>
	</a>
</div>
