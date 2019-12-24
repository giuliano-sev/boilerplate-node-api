import {Request, Response, Router} from 'express';
import {InvalidCredentialsError} from '../../cross-cutting/exceptions';
import {response, ApiResponse} from '../../cross-cutting/responder';
import {validateBody} from './middleware';

import * as Joi from '@hapi/joi';

import business from '../../business';

const login = async (req: Request, res: Response): Promise<ApiResponse> => {
	try{
		const {username, password} = req.body;

		if(!username || !password){
			throw new InvalidCredentialsError();
		}

		const jwt = await business.auth.login(username, password);

		return response.ok(res, jwt);
	}catch(err){
		console.error(err);

		if(err instanceof InvalidCredentialsError){
			return response.badRequest(res, err.message);
		}

		return response.internal(res, err);
	}
};

const loginBodySchema = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
});

export const authRoutes = (router: Router): void => {
	router.route('/auth/login').post(validateBody(loginBodySchema), login);
};
