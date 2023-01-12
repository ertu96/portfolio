<script>
	import { page } from '$app/stores';
</script>

<div class="dark">
	<div
		class="flex flex-col min-h-screen justify-between main-background bg-slate-100 dark:bg-slate-900 text-text-gray-800 dark:text-gray-200"
	>
		<div class="drawer">
			<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				<main class="p-8 my-20 container mx-auto backdrop-blur-3xl bg-white/10 dark:bg-black/10">
					<h1 class="text-center text-4xl">{$page.status} {$page.error?.message}</h1>
					<a href="/" class="flex justify-center mt-10">
						<button class="btn btn-ghost btn-lg underline shadow-sm">Return to Home</button>
					</a>
				</main>
			</div>
		</div>
	</div>
</div>
