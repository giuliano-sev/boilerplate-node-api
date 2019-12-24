import {Sequelize} from 'sequelize-typescript';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dbConfig from './db-config';

import routes from './controllers';
import env from './cross-cutting/env';

// App kickstarter. This is the place where:
// - DB connection is created
// - App Server is configured and spun up
// - Cronjobs are started

export const start = async () => {
	try{
		// DB Setup
		await new Sequelize(dbConfig).authenticate();
		console.log('Connection to the DB has been established successfully');

		const app = express();
		const port = env.APP_PORT;

		// Setup CORS
		app.use(cors());

		// Setup Parser Middleware
		app.use(bodyParser.urlencoded({extended: true}));
		app.use(bodyParser.json());

		// Setup App routes
		routes(app);

		// Start listening
		app.listen(port);

		console.log(`Server started on: ` + port);
	}catch(err){
		console.error(err);
	}
};
