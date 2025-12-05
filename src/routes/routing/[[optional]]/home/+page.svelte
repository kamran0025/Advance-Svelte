<script lang="ts">
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
</script>

<h1>Optional Parameter Example</h1>
<p>Language: {data.lang}</p>
