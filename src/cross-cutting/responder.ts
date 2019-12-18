import {Response} from 'express';
import {PaginationMetadata} from './types';

export interface ApiResponse extends Response {}

export const response = {
	ok: (res: Response, data: any, pagination?: PaginationMetadata, metadata?: any): ApiResponse =>
		res.status(200).json({
			httpCode: 200,
			data,
			pagination,
			metadata,
		}),
	badRequest: (res: Response, errorMessage = 'Bad request'): ApiResponse =>
		res.status(400).json({
			httpCode: 400,
			errorMessage,
		}),
	internal: (res: Response, errorMessage = 'Internal Error Occurred'): ApiResponse =>
		res.status(500).json({
			httpCode: 500,
			errorMessage,
		}),
};
