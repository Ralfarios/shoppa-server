const env = process.env.NODE_ENV || 'development';
const upperCasedENV = env.toUpperCase();

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const username = process.env['DB_USERNAME_' + upperCasedENV];
const password = process.env['DB_PASSWORD_' + upperCasedENV];
const database = process.env['DB_DATABASE_' + upperCasedENV];
const host = process.env['DB_HOST_' + upperCasedENV];
const dialect = process.env['DB_DIALECT_' + upperCasedENV];

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect
  },
  test: {
    username,
    password,
    database,
    host,
    dialect
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};
