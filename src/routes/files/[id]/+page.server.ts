import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {
    const {id} = params;
    try {
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    error(404, 'Not found');
};