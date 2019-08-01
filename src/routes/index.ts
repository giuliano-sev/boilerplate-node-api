import * as express from 'express';

import auth from './auth'

export default (app: express.Application): express.Application => {
    // API routes configuration
    const api_routes = express.Router();

    auth(api_routes);

    app.use('/api', api_routes);

    return app;
}