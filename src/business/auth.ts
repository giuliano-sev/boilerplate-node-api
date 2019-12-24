import {InvalidCredentialsError} from '../cross-cutting/exceptions';
import {JWTUserClaims} from '../cross-cutting/types';

import * as m from 'moment';
import * as jwt from 'jsonwebtoken';
import * as pwd from 'node-password-util';

import business from '.';
import env from '../cross-cutting/env';

export const login = async (username: string, password: string): Promise<{jwt: string}> => {
	// Get user
	const user = await business.user.getByUsername(username);

	// Check user credentials
	// - Username
	if(!user){
		throw new InvalidCredentialsError();
	}

	// - Password
	if(!isCorrectPassword(password, user.password)){
		throw new InvalidCredentialsError();
	}

	// Build JWT
	const claims: JWTUserClaims = {
		userId: user.id,
		username: user.username,
		issueTimestamp: m.utc().format(),
	};

	return {
		jwt: jwt.sign(claims, env.JWT_PASSPHRASE, {expiresIn: env.JWT_PASSPHRASE + 'h'}),
	};
};

export const verifyJwt = (userJwt: string): JWTUserClaims => {
	return jwt.verify(userJwt, env.JWT_PASSPHRASE) as JWTUserClaims;
};

const isCorrectPassword = (password: string, hashedPassword: string): boolean => {
	return (pwd.compare({password: hashedPassword}, password) as any) as boolean;
};
