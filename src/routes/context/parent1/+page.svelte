<script lang="ts">
	import { getContext, setContext } from "svelte";
	import ChildParent1 from "../../../components/ChildParent1.svelte";

    setContext('user', () => "Md Kamran");
    const layout = getContext('layout') as () => string;
</script>

<ChildParent1 />

<br />
<br />
<a href="/context/parent2" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
    → Go to Parent2 Page
</a>
<p>Context from Layout: {layout?.()}</p>