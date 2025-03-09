<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<main class="flex min-h-[calc(100vh-5rem)] items-center justify-center">
	<div class="flex flex-col gap-2">
		<span>{page.status} {page.error?.message}</span>
		<Button href="/#projects">Go back to Projects</Button>
	</div>
</main>
