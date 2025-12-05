import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    try {
        const res = await fetch('https://dummyjson.com/users?limit=5&skip=10&select=firstName,lastName,age,email,university,company,department,title');
        const data = await res.json();
        // Return with a different key to avoid collision
        return {
            pageClient: data
        };
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    error(404, 'Not found');
};
