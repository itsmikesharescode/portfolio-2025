<script lang="ts" module>
	import Link from 'lucide-svelte/icons/link';
</script>

<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<footer id="contact" class="flex min-h-[200px] items-center bg-secondary">
	<section class="container flex flex-col items-center justify-center gap-1">
		<h2 class="text-base text-muted-foreground">
			Made with ❤️‍🔥 by Mike John <span class="font-semibold">Eviota</span>
		</h2>

		<div class="">
			<Button variant="link">
				<Link />
				Github
			</Button>
			<Button variant="link">
				<Link />
				Facebook
			</Button>
		</div>
	</section>
</footer>
