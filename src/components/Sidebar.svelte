<script lang="ts">
	interface NavItem {
		name: string;
		href: string;
		icon?: string;
	}

	const navItems: NavItem[] = [
		{ name: 'Life Cycle Method', href: '/lcm', icon: '📋' },
		{ name: 'File and Folder Structure', href: '/files', icon: '🏠' },
		{ name: 'Routing', href: '/routing', icon: '⚙️' },
		{ name: 'context', href: '/context', icon: '📧' },
        { name:'Store', href:'/store', icon:'🛒'}
	];

	let { isOpen = $bindable(true) } = $props();
</script>

<aside
	class="fixed left-0 top-0 z-1000 flex h-screen w-64 flex-col bg-slate-800 text-white shadow-lg transition-transform duration-300 {isOpen
		? 'translate-x-0'
		: '-translate-x-full'} md:max-w-64 sm:max-w-40"
>
	<div class="flex items-center justify-between border-b border-white/10 px-4 py-6">
		<h2 class="text-xl font-semibold">Navigation</h2>
		<button
			class="flex items-center justify-center p-1 text-2xl transition-opacity hover:opacity-70"
			onclick={() => (isOpen = !isOpen)}
			aria-label="Toggle sidebar"
		>
			{isOpen ? '✕' : '☰'}
		</button>
	</div>

	<nav class="flex-1 overflow-y-auto py-4">
		<ul class="space-y-1">
			{#each navItems as item}
				<li>
					<a
						href={item.href}
						class="flex items-center gap-3 px-6 py-3.5 text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
					>
						{#if item.icon}
							<span class="inline-flex min-w-6 items-center justify-center text-xl"
								>{item.icon}</span
							>
						{/if}
						<span class="font-medium">{item.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
