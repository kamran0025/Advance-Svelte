<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    import { counter } from "../../store/store";
    let count = $state(1);
    let prevCount = 0; // Use regular variable, not $state

    // It run after the component is first rendered to the dom
    onMount(() => {
        console.log("Life Cycle Method Page Mounted");
    });

    // It run before the component updates due to state changes
    $effect.pre(() => {
        console.log("Life Cycle Method Page Before Update", {prevCount});
        prevCount = count;
    });

    // It run after the component updates due to state changes
    $effect(() => {
        console.log("Life Cycle Method Page Updated", count);
    });

    // It runs when the components is being removed from the dom
    onDestroy(() => {
        console.log("Life Cycle Method Page Destroyed");
    });

    const increment = () => {
        count += 1;
    };

</script>
Count from store: {$counter}
<h1 class="text-3xl font-bold mb-4">Life Cycle Method in SvelteKit</h1>
<p class="mb-4">This page demonstrates the life cycle methods in SvelteKit.</p>
<button class="px-4 py-2 bg-blue-500 text-white rounded" onclick={increment}>Increment</button>
<p class="mt-4">Current Count: {count}</p>