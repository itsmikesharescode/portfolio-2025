<script lang="ts" module>
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { projects } from '$lib/index';
	import Link from 'lucide-svelte/icons/link';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
</script>

<script lang="ts">
</script>

<main id="projects" class="container flex min-h-screen flex-col gap-10 pb-20">
	<section class="flex items-center gap-10">
		<div class="w-full">
			<Separator class="border-b-2" />
		</div>
		<div class="">
			<h2 class=" text-2xl font-semibold">Projects</h2>
		</div>
	</section>

	<section class="grid gap-4 md:grid-cols-2">
		{#each projects as project}
			<div class="flex flex-col gap-4" id={project.slug}>
				<Avatar.Root class="h-[320px] w-full rounded-lg">
					<Avatar.Image src={project.links.image} alt={project.title} />
					<Avatar.Fallback>{project.title.slice(0, 2)}</Avatar.Fallback>
				</Avatar.Root>

				<h2 class="text-2xl font-semibold">{project.title}</h2>
				<p class="line-clamp-5 text-base text-muted-foreground md:min-h-[130px]">
					{project.description}
				</p>

				<div class="flex flex-wrap justify-end">
					{#if project.links.liveUrl}
						<Button variant="link" href={project.links.liveUrl} target="_blank">
							<Link class="flex items-center gap-2" />
							Live Website
						</Button>
					{:else}
						<Popover.Root>
							<Popover.Trigger class={buttonVariants({ variant: 'link' })}>
								<Link class="flex items-center gap-2" />
								Live Website
							</Popover.Trigger>
							<Popover.Content>
								<p class="text-center text-sm">
									You can't access the website because it's in local network
								</p>
							</Popover.Content>
						</Popover.Root>
					{/if}

					<Button variant="link" href={project.slug}>
						<Link class="flex items-center gap-2" />
						Read More
					</Button>
				</div>
			</div>
		{/each}
	</section>
</main>
