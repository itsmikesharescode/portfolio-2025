<script lang="ts" module>
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Link from 'lucide-svelte/icons/link';
</script>

<script lang="ts">
	const { data } = $props();
</script>

{#snippet templateReadonly({ title, description }: { title: string; description: string })}
	<div class="flex flex-col gap-2">
		<h1 class="text-2xl font-semibold">{title}</h1>
		<p class="text-base text-muted-foreground">{description}</p>
	</div>
{/snippet}

<main class="container flex min-h-screen flex-col gap-10">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/#{data.projects.slug}">Projects</Breadcrumb.Link>
			</Breadcrumb.Item>

			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>{data.projects.title}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<section class="flex flex-col gap-5">
		{@render templateReadonly({
			title: data.projects.title,
			description: data.projects.description
		})}

		<div class="aspect-video w-full rounded-lg bg-primary">
			<video class="aspect-video object-cover" controls poster={data.projects.links.image}>
				<source src={data.projects.links.video} type="video/mp4" />
				<track kind="captions" label="English" srclang="en" default />
				Your browser does not support the video tag.
			</video>
		</div>
	</section>

	<footer class="flex flex-col gap-10">
		<div class="flex flex-col gap-5">
			<span>Technology Used:</span>

			<div class="flex flex-wrap gap-2">
				{#each data.projects.techStack as tech}
					<Badge variant="outline">{tech}</Badge>
				{/each}
			</div>
		</div>

		<div class="flex flex-wrap items-center justify-end gap-2">
			{#if data.projects.links.liveUrl}
				<Button variant="link" href={data.projects.links.liveUrl} target="_blank">
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

			{#if data.projects.links.githubUrl}
				<Button variant="link" href={data.projects.links.githubUrl} target="_blank">
					<Link class="flex items-center gap-2" />
					GitHub Repository
				</Button>
			{:else}
				<Popover.Root>
					<Popover.Trigger class={buttonVariants({ variant: 'link' })}>
						<Link class="flex items-center gap-2" />
						GitHub Repository
					</Popover.Trigger>
					<Popover.Content>
						<p class="text-center text-sm">
							You can't access the code source because it's in private repository. Contact the
							developer.
						</p>
					</Popover.Content>
				</Popover.Root>
			{/if}
		</div>
	</footer>
</main>
