import {Options} from 'sequelize/types';

import * as path from 'path';

import env from './cross-cutting/env';

module.exports = {
	dialect: 'mysql',
	host: env.DB_HOST,
	database: env.DB_NAME,
	username: env.DB_USER,
	password: env.DB_PASSWORD,
	modelPaths: [path.resolve(__dirname, 'database', 'models', '*.js')],
	logging: false,
} as Options;
