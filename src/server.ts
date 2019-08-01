import {Model} from 'objection';
import * as knex_config from './knex_file';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as Knex from 'knex';

import routes from './routes';
import env from './cross-cutting/env';

export const start = () => {
    const app = express();
    const port = env.APP_PORT;

    // DB Setup
	const knex = Knex(knex_config);

	Model.knex(knex);
    knex.migrate.latest([knex_config] as any);

	app.use(cors());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	routes(app);

    // If a value is returned as undefined, null is put in its place
	app.set(`json replacer`, (key, value) => (typeof value === `undefined` ? null : value));

	app.listen(port);

	console.log(`Server started on: ` + port);
}