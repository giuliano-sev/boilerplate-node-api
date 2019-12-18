// All these environment variables need to be loaded with dotenv from a .env file

const getAppEnvironment = (): AppEnvironment => {
	return (process.env.APP_ENVIRONMENT || 'LOCAL').toUpperCase() as AppEnvironment;
};

const getAppHost = (): string => {
	const appEnvironment = getAppEnvironment();

	switch(appEnvironment){
		case 'PROD':
			return '';
		default:
			return 'http://localhost:' + process.env.APP_PORT;
	}
};

export default {
	// Application
	APP_PORT: parseInt(process.env.APP_PORT),
	APP_ENVIRONMENT: getAppEnvironment(),
	APP_HOST: getAppHost(),

	// Security
	JWT_PASSPHRASE: process.env.JWT_PASSPHRASE,
	JWT_EXPIRATION_TIME: parseInt(process.env.JWT_EXPIRATION_TIME),

	// Database
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	DB_PORT: parseInt(process.env.DB_PORT),
	DB_CHARSET: process.env.DB_CHARSET,
};

export enum AppEnvironment {
	LOCAL = 'LOCAL',
	PROD = 'PROD',
}
