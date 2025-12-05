<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	const user = data as any; // Type assertion for the user data
</script>

<div class="mx-auto max-w-6xl">
	<!-- Back Button -->
	<a href="/files" class="mb-6 inline-flex items-center text-blue-600 hover:text-blue-700">
		← Back to Users
	</a>

	<!-- Profile Header -->
	<div class="mb-8 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 p-8 text-white shadow-lg">
		<div class="flex items-start gap-6">
			<img
				src={user.image}
				alt={`${user.firstName} ${user.lastName}`}
				class="h-32 w-32 rounded-full border-4 border-white shadow-lg"
			/>
			<div class="flex-1">
				<h1 class="text-4xl font-bold">
					{user.firstName}
					{user.lastName}
					{#if user.maidenName}
						<span class="text-xl font-normal">({user.maidenName})</span>
					{/if}
				</h1>
				<p class="mt-2 text-xl opacity-90">@{user.username} • {user.role}</p>
				<div class="mt-4 flex flex-wrap gap-4">
					<span class="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
						{user.gender}
					</span>
					<span class="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
						{user.age} years old
					</span>
					<span class="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
						{user.bloodGroup}
					</span>
				</div>
			</div>
		</div>
	</div>

	<div class="grid gap-6 lg:grid-cols-2">
		<!-- Personal Information -->
		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Personal Information</h2>
			<div class="space-y-3">
				<div class="flex justify-between border-b border-gray-100 pb-2">
					<span class="font-medium text-gray-600">Birth Date:</span>
					<span class="text-gray-900">{user.birthDate}</span>
				</div>
				<div class="flex justify-between border-b border-gray-100 pb-2">
					<span class="font-medium text-gray-600">Email:</span>
					<a href="mailto:{user.email}" class="text-blue-600 hover:underline">{user.email}</a>
				</div>
				<div class="flex justify-between border-b border-gray-100 pb-2">
					<span class="font-medium text-gray-600">Phone:</span>
					<a href="tel:{user.phone}" class="text-blue-600 hover:underline">{user.phone}</a>
				</div>
				<div class="flex justify-between border-b border-gray-100 pb-2">
					<span class="font-medium text-gray-600">Height:</span>
					<span class="text-gray-900">{user.height} cm</span>
				</div>
				<div class="flex justify-between border-b border-gray-100 pb-2">
					<span class="font-medium text-gray-600">Weight:</span>
					<span class="text-gray-900">{user.weight} kg</span>
				</div>
				<div class="flex justify-between border-b border-gray-100 pb-2">
					<span class="font-medium text-gray-600">Eye Color:</span>
					<span class="text-gray-900">{user.eyeColor}</span>
				</div>
				{#if user.hair}
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">Hair:</span>
						<span class="text-gray-900">{user.hair.color}, {user.hair.type}</span>
					</div>
				{/if}
			</div>
		</div>

		<!-- Address -->
		{#if user.address}
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
				<h2 class="mb-4 text-2xl font-bold text-gray-900">Address</h2>
				<div class="space-y-2">
					<p class="text-gray-900">{user.address.address}</p>
					<p class="text-gray-900">
						{user.address.city}, {user.address.stateCode} {user.address.postalCode}
					</p>
					<p class="text-gray-900">{user.address.country}</p>
					{#if user.address.coordinates}
						<p class="mt-4 text-sm text-gray-600">
							Coordinates: {user.address.coordinates.lat}, {user.address.coordinates.lng}
						</p>
					{/if}
				</div>
			</div>
		{/if}

		<!-- Company -->
		{#if user.company}
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
				<h2 class="mb-4 text-2xl font-bold text-gray-900">Company</h2>
				<h3 class="mb-2 text-xl font-semibold text-gray-800">{user.company.name}</h3>
				<div class="space-y-2">
					<p class="text-gray-700">
						<strong>Title:</strong>
						{user.company.title}
					</p>
					<p class="text-gray-700">
						<strong>Department:</strong>
						{user.company.department}
					</p>
					{#if user.company.address}
						<div class="mt-4 border-t border-gray-200 pt-4">
							<p class="font-medium text-gray-700">Office Location:</p>
							<p class="text-gray-700">{user.company.address.address}</p>
							<p class="text-gray-700">
								{user.company.address.city}, {user.company.address.stateCode}
								{user.company.address.postalCode}
							</p>
						</div>
					{/if}
				</div>
			</div>
		{/if}

		<!-- Education -->
		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Education</h2>
			<div class="flex items-center gap-3">
				<span class="text-4xl">🎓</span>
				<p class="text-lg text-gray-900">{user.university}</p>
			</div>
		</div>

		<!-- Bank Information -->
		{#if user.bank}
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
				<h2 class="mb-4 text-2xl font-bold text-gray-900">Banking</h2>
				<div class="space-y-3">
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">Card Type:</span>
						<span class="text-gray-900">{user.bank.cardType}</span>
					</div>
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">Card Number:</span>
						<span class="font-mono text-gray-900">•••• {user.bank.cardNumber.slice(-4)}</span>
					</div>
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">Expires:</span>
						<span class="text-gray-900">{user.bank.cardExpire}</span>
					</div>
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">Currency:</span>
						<span class="text-gray-900">{user.bank.currency}</span>
					</div>
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">IBAN:</span>
						<span class="font-mono text-sm text-gray-900">{user.bank.iban}</span>
					</div>
				</div>
			</div>
		{/if}

		<!-- Crypto -->
		{#if user.crypto}
			<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
				<h2 class="mb-4 text-2xl font-bold text-gray-900">Cryptocurrency</h2>
				<div class="space-y-3">
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">Coin:</span>
						<span class="text-gray-900">{user.crypto.coin}</span>
					</div>
					<div class="flex justify-between border-b border-gray-100 pb-2">
						<span class="font-medium text-gray-600">Network:</span>
						<span class="text-gray-900">{user.crypto.network}</span>
					</div>
					<div class="mt-2">
						<span class="font-medium text-gray-600">Wallet:</span>
						<p class="mt-1 break-all font-mono text-sm text-gray-900">{user.crypto.wallet}</p>
					</div>
				</div>
			</div>
		{/if}

		<!-- Technical Info -->
		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Technical Information</h2>
			<div class="grid gap-4 md:grid-cols-2">
				<div>
					<span class="font-medium text-gray-600">IP Address:</span>
					<p class="text-gray-900">{user.ip}</p>
				</div>
				<div>
					<span class="font-medium text-gray-600">MAC Address:</span>
					<p class="font-mono text-gray-900">{user.macAddress}</p>
				</div>
				<div>
					<span class="font-medium text-gray-600">EIN:</span>
					<p class="text-gray-900">{user.ein}</p>
				</div>
				<div>
					<span class="font-medium text-gray-600">SSN:</span>
					<p class="text-gray-900">•••-••-{user.ssn.slice(-3)}</p>
				</div>
			</div>
			<div class="mt-4">
				<span class="font-medium text-gray-600">User Agent:</span>
				<p class="mt-1 text-sm text-gray-700">{user.userAgent}</p>
			</div>
		</div>
	</div>
</div>
