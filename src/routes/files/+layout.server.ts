import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
    try {
        const res = await fetch('https://dummyjson.com/users?limit=5&skip=15&select=firstName,lastName,age,email,university,company,department,title');
        const layoutData = await res.json();
        // Return with a different key to avoid collision
        return {
            layoutUsers: layoutData
        };
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    error(404, 'Not found');
};
