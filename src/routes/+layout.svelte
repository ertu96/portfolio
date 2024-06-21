<script>
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
