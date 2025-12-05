export interface UserData {
	users: Array<{
		id: number;
		firstName: string;
		lastName: string;
		age: number;
		email: string;
		university: string;
		company?: {
			name: string;
			title: string;
			department: string;
			address?: {
				address: string;
				city: string;
				stateCode: string;
				postalCode: string;
				country: string;
			};
		};
	}>;
	total: number;
	skip: number;
	limit: number;
}

export interface Recipe {
	id: number;
	name: string;
	image: string;
}

export interface RecipeListData {
	recipes: Recipe[];
	total?: number;
	skip?: number;
	limit?: number;
}
