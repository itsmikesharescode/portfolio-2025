<script lang="ts" module>
	import Menu from 'lucide-svelte/icons/menu';
	import Hand from 'lucide-svelte/icons/hand';
	import Button from '$lib/components/ui/button/button.svelte';
	import Darkmode from '../darkmode/darkmode.svelte';
	import { page } from '$app/state';

	export const navLinks = [
		{
			label: 'Home',
			href: '/'
		},
		{
			label: 'About',
			href: '/#about'
		},
		{
			label: 'Projects',
			href: '/#projects'
		},
		{
			label: 'Contact',
			href: '/#contact'
		}
	];
</script>

<script lang="ts">
</script>

<nav class="sticky top-0 z-50 flex h-16 items-center border-b-2 bg-background px-4 md:px-2">
	<section class="flex w-full items-center justify-between gap-5 md:container">
		<div class="flex items-center gap-2">
			<Button variant="ghost" size="icon" class="md:hidden">
				<Menu />
			</Button>

			<Darkmode />
		</div>
		<ul class="hidden w-full items-center justify-end gap-4 md:flex">
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class={{
							'text-sm transition-all hover:text-primary': true,
							'text-muted-foreground': page.url.hash !== link.href,
							'text-primary': page.url.hash === link.href || page.url.hash === link.href.slice(1)
						}}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<Button href="mailto:eviotamikejohnb@gmail.com" class="rounded-full">
			Get In Touch
			<Hand />
		</Button>
	</section>
</nav>

<div class=" h-16"></div>
