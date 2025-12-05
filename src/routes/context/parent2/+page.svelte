<script lang="ts">
	import { getContext } from "svelte";
    import { counter } from "../../../store/store";
    const user = getContext('user') as () => string;
    const page = getContext('page') as () => string;
</script>
<h2>Parent 2 Page</h2>
<p>User from Context of Parent1: {user?.()}</p>
<p>Page from Context of +page.svelte: {page?.()}</p>

<!-- {$counter} -->