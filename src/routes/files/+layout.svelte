<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { UserData } from '../../types';
	import PageLoader from '../../components/PageLoader.svelte';
	import {navigating} from '$app/stores';
	let { children, data }: { children: Snippet; data: UserData } = $props();
</script>

<!-- Loading Indicator -->
<!-- {#if $navigating}
	<PageLoader />
{/if} -->

<div class="mx-auto max-w-7xl">
	<!-- Header Section -->
	<header class="mb-8 border-b border-gray-200 pb-3">
		<div class="">
			<h1 class="mb-4 text-3xl font-bold">File and Folder Structure in SvelteKit</h1>
			<p class="mb-6 text-gray-600">
				This page explains the file and folder structure used in SvelteKit projects.
			</p>
			
			{#if data.total}
				<p class="text-sm text-gray-500">
					Total users in database: {data.total}
				</p>
			{/if}
		</div>
	</header>

	<!-- Main Content -->
	<main class="mb-8">
		{@render children()}
	</main>

	<!-- Footer Section -->
	<footer class="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
		<p>&copy; 2025 SvelteKit Files Demo. All rights reserved.</p>
	</footer>
</div>
