import { writable } from 'svelte/store';
function createCounter() {
	const { subscribe, update, set } = writable(0);
	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}
export const counter = createCounter();

// writable, readable, derived 