import {Request, Response, Router} from 'express';
import {response, ApiResponse} from '../../cross-cutting/responder';
import {validateUser, validateUserRoles} from './middleware';

import business from '../../business';

const getUsers = async (req: Request, res: Response): Promise<ApiResponse> => {
	try{
		const users = await business.user.getUsers();

		return response.ok(res, users);
	}catch(err){
		console.error(err);
		return response.internal(res, err);
	}
};

export const userRoutes = (router: Router): void => {
	router.route('/user').get(validateUser, validateUserRoles(['admin']), getUsers);
};
