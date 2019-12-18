import {Request, Response} from 'express';
import {InvalidCredentialsError} from '../../cross-cutting/exceptions';
import {response, ApiResponse} from '../../cross-cutting/responder';

import business from '../../business';

export const login = async (req: Request, res: Response): Promise<ApiResponse> => {
	try{
		const {username, password} = req.body;

		if(!username || !password){
			throw new InvalidCredentialsError();
		}

		const jwt = await business.auth.login(username, password);

		return response.ok(res, jwt);
	}catch(err){
		console.error(err);
		return response.internal(res, err);
	}
};
