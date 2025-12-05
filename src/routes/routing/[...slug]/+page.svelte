<script lang="ts">
    const {data}:{data: {rest: string[]}} = $props();
</script>
<h1 class="text-2xl font-bold mb-4">Dynamic Routing with Rest Parameters</h1>
<p class="mb-4">This page demonstrates dynamic routing using rest parameters in SvelteKit.</p>
<p class="mb-4">Captured Slug Segments:</p>
<ul class="list-disc list-inside">
    {#each data.rest as segment}
        <li>{segment}</li>
    {/each}
</ul>
