import {NextFunction, Response, Request} from 'express';
import {ObjectSchema} from '@hapi/joi';
import {response} from '../../cross-cutting/responder';
import business from '../../business';
import {JWTUserClaims, Role} from '../../cross-cutting/types';

// Validates request body based on a Joi schema
export const validateBody = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
	const {error, value} = schema.validate(req.body);

	if(error){
		return response.badRequest(res, 'Invalid Payload', error);
	}else{
		req.body = value;
		return next();
	}
};

// Validates Authorization Header JWT
export const validateUser = (req: Request, res: Response, next: NextFunction) => {
	if(!req.headers.authorization){
		return response.unauthorized(res);
	}

	try{
		res.locals.authUser = business.auth.verifyJwt(req.headers.authorization.replace(/Bearer /i, ''));
		return next();
	}catch(err){
		return response.unauthorized(res);
	}
};

// Validates authenticated user roles
// Must be put after validateUser
export const validateUserRoles = (roles: Role[]) => (req: Request, res: Response, next: NextFunction) => {
	const userRoles = (res.locals.authUser as JWTUserClaims).roles || [];

	if(roles.find(role => !userRoles.includes(role))){
		return response.unauthorized(res);
	}

	return next();
};
