<script lang="ts" module>
	import * as Card from '$lib/components/ui/card/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export const experiences = [
		{
			title: 'Front End Web Developer',
			company: 'Codustry Inc. (Thailand)',
			description:
				'Implement responsive and user-friendly web applications using Figma, Svelte 5, Sveltekit, Typescript, TailwindCSS, ShadCN Svelte, and Supabase.',
			duration: '2024 September 4 - Active'
		},
		{
			title: 'Front EndWeb Developer',
			company: 'Kreioslabs (Philippines)',
			description:
				'Implement responsive and user-friendly existing web applicaiton using Figma, Svelte 5, Sveltekit, Typescript, TailwindCSS, Go, Drizzle ORM, and MySQL.',
			duration: '2023 February 26 - 2023 March 12'
		},

		{
			title: 'Intern IT Programmer',
			company: 'Anapolis Group of Companies (Philippines)',
			description:
				'Implement responsive and user-friendly fullstack web applications using Figma, Svelte 3-4, Sveltekit, Typescript, TailwindCSS, Skeleton UI, ShadCN Svelte, Firebase and Supabase.',
			duration: '2023 July 4 - 2023 September 27'
		},
		{
			title: 'Freelancing',
			company: 'Active since 2021',
			description:
				'Implement responsive and user-friendly fullstack web applications using Figma, Svelte 3-4-5, Sveltekit, Typescript, TailwindCSS, Skeleton UI, ShadCN Svelte, Firebase and Supabase.',
			duration: '2021 - Active'
		}
	];
</script>

<script lang="ts">
</script>

<main id="about" class="container min-h-screen">
	<section class="flex items-center gap-10">
		<div class="w-full">
			<Separator class="border-b-2" />
		</div>
		<div class="">
			<h2 class=" text-2xl font-semibold">About</h2>
		</div>
	</section>

	<section class="min-h-screen py-20">
		<div class="grid gap-4 md:grid-cols-2">
			{#each experiences as experience}
				<Card.Root class="h-fit">
					<Card.Header>
						<Card.Title>{experience.title}</Card.Title>
						<Card.Description>{experience.company}</Card.Description>
					</Card.Header>
					<Card.Content>
						<p class="text-sm text-muted-foreground">
							{experience.description}
						</p>
					</Card.Content>
					<Card.Footer>
						<p class="text-sm text-muted-foreground">{experience.duration}</p>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	</section>
</main>
