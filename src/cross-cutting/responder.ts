import {Response} from 'express';
import {PaginationMetadata} from './types';

export interface ApiResponse extends Response {}

export const response = {
	ok: (res: Response, data: any, pagination?: PaginationMetadata, metadata?: any): ApiResponse =>
		res.status(200).json({
			status: 200,
			data,
			pagination,
			metadata,
		}),
	badRequest: (res: Response, errorMessage = 'Bad request', error?: any): ApiResponse =>
		res.status(400).json({
			status: 400,
			errorMessage,
			error,
		}),
	unauthorized: (res: Response, errorMessage = 'Unauthorized', error?: any): ApiResponse =>
		res.status(401).json({
			status: 401,
			errorMessage,
			error,
		}),
	internal: (res: Response, error: Error, errorMessage = 'Internal Error Occurred'): ApiResponse =>
		res.status(500).json({
			status: 500,
			errorMessage,
			error,
		}),
};
