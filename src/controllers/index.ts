import {Application, Router} from 'express';
import {authRoutes} from './v1/auth';
import {userRoutes} from './v1/user';

// Configure API Routes
export default (app: Application) => {
	const apiRouter = Router();

	// API V1 Routes
	const routerV1 = Router();

	authRoutes(routerV1);
	userRoutes(routerV1);

	apiRouter.use('/v1', routerV1);

	app.use('/api', apiRouter);
};
