<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-orange-50">
	<!-- Marketing Header -->
	<header class="border-b border-purple-200 bg-white/80 shadow-sm backdrop-blur">
		<div class="mx-auto max-w-7xl px-4 py-6">
			<div class="flex items-center justify-between">
				<div class="flex items-center gap-3">
					<div
						class="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-pink-600"
					>
						<span class="text-2xl">🚀</span>
					</div>
					<div>
						<h1 class="text-2xl font-bold text-purple-900">Marketing Hub</h1>
						<p class="text-sm text-purple-600">Grow Your Business</p>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- Marketing Content -->
	<main class="mx-auto max-w-7xl px-4 py-12">
		<div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-purple-100">
			{@render children()}
		</div>
	</main>

	<!-- Marketing Footer -->
	<footer
		class="mt-12 border-t border-purple-200 bg-linear-to-r from-purple-900 to-pink-900 py-8 text-white"
	>
		<div class="mx-auto max-w-7xl px-4">
			<p>&copy; 2024 Marketing Inc. All rights reserved.</p>
		</div>
	</footer>
</div>
