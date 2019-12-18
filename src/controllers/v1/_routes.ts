import {Application, Router} from 'express';

import * as auth from './auth';
import * as user from './user';

export default (app: Application): void => {
	// API V1 routes configuration
	const routes = Router();

	authRoutes(routes);
	userRoutes(routes);

	app.use('/api/v1', routes);
};

// Auth Routes
const authRoutes = (router: Router): void => {
	router.route('/auth/login').post(auth.login);
};

// User Routes
const userRoutes = (router: Router): void => {
	router.route('/user').get(user.getUsers);
};
