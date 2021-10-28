require('dotenv').config({ path: `${__dirname}/.env` });

const { env } = process;

module.exports = {
	name: env.APP_NAME,
	baseUrl: env.APP_BASE_URL,
  port: env.PORT,
  redis_host: env.REDIS_HOST,
  redis_port: env.REDIS_PORT,
  redis_password: env.REDIS_PASSWORD,

  development: {
    url: env.MONGO_DEV_DATABASE_URL,
    database: env.MONGO_DEV_DATABASE,
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    username: env.MONGO_USERNAME,
    password: env.MONGO_PASSWORD,
  },
  test: {
    url: env.MONGO_TEST_DATABASE_URL,
    database: env.MONGO_TEST_DATABASE,
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    username: env.MONGO_USERNAME,
    password: env.MONGO_PASSWORD,
  },
  production: {
    url: env.MONGO_DATABASE_URL,
    database: env.MONGO_DATABASE,
    host: env.MONGO_HOST,
    port: env.MONGO_PORT,
    username: env.MONGO_USERNAME,
    password: env.MONGO_PASSWORD,
  },
}