<script>
  import { counter } from "../../store/store";
</script>

<div class="mx-auto max-w-2xl p-8">
	<div class="rounded-2xl bg-linear-to-br from-blue-50 to-indigo-100 p-8 shadow-xl">
		<h1 class="mb-6 text-center text-3xl font-bold text-indigo-900">Counter Store Demo</h1>
		
		<!-- Counter Display -->
		<div class="mb-8 rounded-xl bg-white p-8 shadow-lg">
			<p class="text-center text-sm font-medium uppercase tracking-wide text-gray-600">Current Count</p>
			<p class="mt-2 text-center text-6xl font-bold text-indigo-600">{$counter}</p>
		</div>

		<!-- Button Controls -->
		<div class="flex flex-col gap-4 sm:flex-row">
			<button
				onclick={counter.decrement}
				class="flex-1 rounded-lg bg-red-500 px-6 py-4 text-xl font-semibold text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-xl active:scale-95"
			>
				<span class="text-2xl">−</span> Decrement
			</button>
			
			<button
				onclick={counter.reset}
				class="flex-1 rounded-lg bg-gray-500 px-6 py-4 text-xl font-semibold text-white shadow-lg transition-all hover:bg-gray-600 hover:shadow-xl active:scale-95"
			>
				↻ Reset
			</button>
			
			<button
				onclick={counter.increment}
				class="flex-1 rounded-lg bg-green-500 px-6 py-4 text-xl font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl active:scale-95"
			>
				<span class="text-2xl">+</span> Increment
			</button>
		</div>
	</div>
</div>
