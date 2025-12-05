<script lang="ts">
	import type { Recipe } from '../types';

	let { recipe }: { recipe: Recipe } = $props();
</script>

<a
	href="/routing/{recipe.id}"
	class="group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
>
	<div class="aspect-video w-full overflow-hidden bg-gray-100">
		<img
			src={recipe.image}
			alt={recipe.name}
			class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
		/>
	</div>
	<div class="p-4">
		<h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
			{recipe.name}
		</h3>
		<p class="mt-1 text-sm text-gray-500">Recipe #{recipe.id}</p>
	</div>
</a>
