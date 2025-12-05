<script lang="ts">
    import { setContext } from "svelte";
    let {children} = $props();
    setContext('layout', () => "Context Layout Page");
</script>

{@render children()}
