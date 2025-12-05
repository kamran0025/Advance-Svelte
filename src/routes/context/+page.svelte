<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import ChildParent1 from '../../components/ChildParent1.svelte';

	setContext('page', () => 'Context Value from +page.svelte');
	const layout = getContext('layout') as () => string;
</script>

<h1>Context Example in SvelteKit</h1>
<a href="/context/parent1" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
	→ Go to Parent1 Page
</a>
<br />
<a href="/context/parent2" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
	→ Go to Parent2 Page
</a>
<!-- <p>Context from Layout: {layout?.()}</p> -->

<br /><br />
<ChildParent1 />
