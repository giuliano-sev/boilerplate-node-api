// Global types are declared here

// Auth
export type JWTUserClaims = {
	userId: number;
	username: string;
	issueTimestamp: string;
};

// Pagination
export type PaginationMetadata = {
	page: number;
	pageSize: number;
	totalPages: number;
	totalRecords: number;
};
