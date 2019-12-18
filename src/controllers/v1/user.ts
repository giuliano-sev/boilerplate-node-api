import {Request, Response} from 'express';
import {response, ApiResponse} from '../../cross-cutting/responder';

import business from '../../business';

export const getUsers = async (req: Request, res: Response): Promise<ApiResponse> => {
	try{
		const users = await business.user.getUsers();

		return response.ok(res, users);
	}catch(err){
		console.error(err);
		return response.internal(res, err);
	}
};
