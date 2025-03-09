<script lang="ts" module>
	import '@fontsource/prompt';
	import '@fontsource/prompt/100.css';
	import '@fontsource/prompt/200.css';
	import '@fontsource/prompt/300.css';
	import '@fontsource/prompt/400.css';
	import '@fontsource/prompt/500.css';
	import '@fontsource/prompt/600.css';
	import '@fontsource/prompt/700.css';
	import '@fontsource/prompt/800.css';
	import '@fontsource/prompt/900.css';
	import Nav from '$lib/components/general/nav/nav.svelte';
	import Footer from '$lib/components/general/footer/footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<ModeWatcher />
<Nav />
{@render children()}
<Footer />

<style>
	:global(body) {
		font-family: 'Prompt', sans-serif;
	}
</style>
