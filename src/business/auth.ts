import {InvalidCredentialsError} from "../cross-cutting/exceptions";
import {JWTUserClaims} from "../cross-cutting/types";

import * as m from 'moment';
import * as jwt from 'jsonwebtoken';
import * as pwd from 'node-password-util';

import business from ".";
import env from "../cross-cutting/env";

export const login = async (username: string, password: string): Promise<{jwt: string}> => {
    // Get user
    const user = await business.user.get_by_username(username);

    // Check user credentials
    // - Username
    if(!user){
        throw new InvalidCredentialsError;
    }

    // - Password
    if(!is_correct_password(password, user.password)){
        throw new InvalidCredentialsError;
    }

    // Build JWT
    const claims: JWTUserClaims = {
        user_id: user.id,
        username: user.username,
        issue_timestamp: m.utc().format(),
    }

    return {
        jwt: jwt.sign(claims, env.JWT_PASSPHRASE),
    }
}

const is_correct_password = (password: string, hashed_password: string): boolean => {
    return pwd.compare({password: hashed_password}, password) as any as boolean;
}