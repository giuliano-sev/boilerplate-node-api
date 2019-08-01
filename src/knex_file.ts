import env from "./cross-cutting/env";

module.exports = {
    client: 'mysql',
    connection: {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_NAME,
        port: env.DB_PORT,
        charset: env.DB_CHARSET,
        timezone: 'Z',
        dateString: true,
    },
    migrations: {
        directory: '../migrations',
    },
}