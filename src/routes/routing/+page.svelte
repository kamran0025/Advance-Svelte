<script lang="ts">

</script>

<div class="mx-auto max-w-7xl">
	<div class="mb-8">
		<h1 class="text-4xl font-bold text-gray-900">Advance Routing in SvelteKit</h1>
		<p class="mt-2 text-gray-600">Discover delicious recipes from around the world</p>
	</div>
    <a href="/routing/1/extra/path" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
        → Go to Rest Parameter Path
    </a>
    <br />
    <a href="/routing/home" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
        → Go to Optional Path
    </a>
    <br />
    <a href="/routing/3/home" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
        → Go to Optional Path With Path
    </a>
	<p>Matcher Example:</p>
	<a href="/routing/fruits/apple" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
		→ Go to Fruits as Apple
	</a>
	 | 
	<a href="/routing/fruits/orange" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
		→ Go to Fruits as Orange
	</a>
	 | 
	<a href="/routing/fruits/mango" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
		→ Go to Fruits as Mango
	</a>
	<p>(group) Example:</p>
	<a href="/routing/about" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
		→ Go to Marketing Page: About
	</a>
	 |  
	<a href="/routing/testimonial" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
		→ Go to Marketing Page: Testimonial
	</a>
	<p>Layout Breakout Example:</p>  
	<a href="/routing/testimonial/breakout" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
		→ Go to Marketing Page: Testimonial Breakout
	</a>
</div>
