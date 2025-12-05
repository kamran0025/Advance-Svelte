<script lang="ts">
	import UserCard from '../../components/UserCard.svelte';
	import type { UserData } from '../../types';
    import type { PageData } from './$types';
    let { data }: { data: PageData } = $props();
    
    // Now you can access BOTH datasets:
    console.log('Layout users:', data.layoutUsers); // From +layout.server.ts
    console.log('Page users:', data.pageClient);     // From +page.server.ts
</script>

<div class="space-y-8">
 
    <!-- Layout Data -->
    {#if data.layoutUsers}
        <section>
            <h2 class="mb-4 text-2xl font-bold">Layout Users (skip=15)</h2>
            <UserCard data={data.layoutUsers as any as UserData} />
        </section>
    {/if}

    <!-- Page Data -->
    {#if data.pageClient}
        <section>
            <h2 class="mb-4 text-2xl font-bold">Page Users (skip=10)</h2>
            <UserCard data={data.pageClient as any as UserData} />
        </section>
    {:else}
        <p class="text-gray-500">No users found.</p>
    {/if}
</div>
