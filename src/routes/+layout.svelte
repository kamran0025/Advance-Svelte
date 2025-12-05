<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '../components/Sidebar.svelte';
	import { navigating } from '$app/stores';
	import PageLoader from '../components/PageLoader.svelte';

	let { children } = $props();
	let sidebarOpen = $state(true);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $navigating}
	<PageLoader />
{/if}

<div class="flex min-h-screen">
	<Sidebar bind:isOpen={sidebarOpen} />

	<button
		class="fixed left-4 top-4 z-999 rounded-md bg-slate-800 px-3 py-2 text-2xl text-white shadow-md transition-all hover:bg-slate-700"
		onclick={() => (sidebarOpen = !sidebarOpen)}
		aria-label="Toggle menu"
	>
		☰
	</button>

	<main
		class="flex-1 p-8 transition-[margin-left] duration-300 {sidebarOpen
			? 'ml-64 max-md:ml-0'
			: 'ml-0'}"
	>
		{@render children()}
	</main>
</div>
