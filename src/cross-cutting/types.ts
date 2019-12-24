// Global types are declared here

// Auth
export type Role = 'admin' | 'customer';

export type JWTUserClaims = {
	userId: number;
	username: string;
	roles: Role[];
	issueTimestamp: string;
};

// Pagination
export type PaginationMetadata = {
	page: number;
	pageSize: number;
	totalPages: number;
	totalRecords: number;
};
