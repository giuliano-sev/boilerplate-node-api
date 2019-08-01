import {Router} from 'express';

import {auth} from '../controllers';

export default (router: Router) => {
    router.route('/auth/login').post(auth.login);
}