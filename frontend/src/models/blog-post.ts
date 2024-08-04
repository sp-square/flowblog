// interface is necessary in TypeScript in order to work with different data types

export interface BlogPost {
	_id: string; // a mongodb id is a special data type, but what we receive on the frontend is a string
	slug: string;
	title: string;
	summary: string;
	body: string;
	createdAt: string;
	updatedAt: string;
}
