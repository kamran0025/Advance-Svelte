<script lang="ts">
	import { goto } from '$app/navigation';
	import type { UserData } from '../types';

	let { data }: { data: UserData } = $props();
	const handleClick = (userId: number) => {
        goto(`/files/${userId}`);
	};
</script>

<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each data.users as user}
		<div
			class="cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
			onclick={() => handleClick(user.id)}
		>
			<!-- User Header -->
			<div class="mb-4 border-b border-gray-100 pb-4">
				<h2 class="text-xl font-semibold text-gray-900">
					{user.firstName}
					{user.lastName}
				</h2>
				<p class="text-sm text-gray-500">ID: {user.id} • Age: {user.age}</p>
			</div>

			<!-- Contact Info -->
			<div class="mb-4 space-y-2">
				<div class="flex items-start gap-2">
					<span class="text-gray-400">✉️</span>
					<a href="mailto:{user.email}" class="text-sm break-all text-blue-600 hover:underline">
						{user.email}
					</a>
				</div>
				<div class="flex items-start gap-2">
					<span class="text-gray-400">🎓</span>
					<span class="text-sm text-gray-700">{user.university}</span>
				</div>
			</div>

			<!-- Company Info -->
			{#if user.company}
				<div class="rounded-md bg-gray-50 p-4">
					<h3 class="mb-2 font-semibold text-gray-800">{user.company.name}</h3>
					<div class="space-y-1 text-sm text-gray-600">
						<p><strong>Title:</strong> {user.company.title}</p>
						<p><strong>Department:</strong> {user.company.department}</p>

						{#if user.company.address}
							<div class="mt-3 border-t border-gray-200 pt-2">
								<p class="font-medium text-gray-700">Location:</p>
								<p>{user.company.address.address}</p>
								<p>
									{user.company.address.city}, {user.company.address.stateCode}
									{user.company.address.postalCode}
								</p>
								<p>{user.company.address.country}</p>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
