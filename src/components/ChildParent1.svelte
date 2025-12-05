<script lang="ts">
	import { getContext } from "svelte";

    const user = getContext('user') as () => string;
    const page = getContext('page') as () => string;
</script>
<h2>Child's of Parent1 </h2>
<p>User from Context of Parent1: {user?.()}</p>
<p>Page from Context of +page.svelte: {page?.()}</p>

