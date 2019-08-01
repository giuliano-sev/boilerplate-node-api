import {Request, Response} from 'express';
import {InvalidCredentialsError} from '../cross-cutting/exceptions';

import kaboom from '../cross-cutting/kaboom';

export const login = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {username, password} = req.body;

        if(!username || !password){
            throw new InvalidCredentialsError;
        }

        const jwt = await this.business.auth.login(username, password);

        return res.json(jwt);
    }catch(err){
        console.error(err);
        return kaboom.internal(res, err);
    }
}