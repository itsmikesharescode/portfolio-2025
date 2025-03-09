<script lang="ts" module>
	export const iconLinks = {
		serverless:
			'https://www.google.com/search?q=serverless+archetecture&oq=serverless+archetecture&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEJMTI3MTJqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8',
		svelte: 'https://svelte.dev/',
		sveltekit: 'https://svelte.dev/docs/kit/introduction',
		supabase: 'https://supabase.com/',
		firebase: 'https://firebase.google.com/'
	};
</script>

<script lang="ts">
</script>

{#snippet templating({ text }: { text: string })}
	<div class="">
		<span>{text}</span>
		<div class="red-500 border-b-2"></div>
	</div>
{/snippet}

<section class="container mt-[25dvh] flex min-h-screen flex-col gap-2">
	<h1 class="text-4xl font-semibold">Hi, I'm Mike John</h1>
	<p class="text-muted-foreground">
		A full-stack developer passionate about crafting exceptional
		<span class="text-primary underline">
			<a href={iconLinks.serverless} target="_blank">serverless</a>
		</span>
		web applications with
		<span class="text-primary underline">
			<a href={iconLinks.sveltekit} target="_blank">SvelteKit</a>
		</span>
		,
		<span class="text-primary underline">
			<a href={iconLinks.svelte} target="_blank">Svelte</a>
		</span>
		,
		<span class="text-primary underline">
			<a href={iconLinks.supabase} target="_blank">Supabase</a>
		</span>
		and
		<span class="text-primary underline">
			<a href={iconLinks.firebase} target="_blank">Firebase</a>
		</span>
	</p>
</section>
