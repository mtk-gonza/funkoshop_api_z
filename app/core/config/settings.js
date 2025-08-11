import 'dotenv/config';

let DB_DIALECT = process.env.DB_DIALECT;
let DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    if (DB_DIALECT === 'mysql') {
        DATABASE_URL = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 3306}/${process.env.DB_NAME}`;
    } else if (DB_DIALECT === 'postgres') {
        DATABASE_URL = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`;
    } else {
        DB_DIALECT = 'sqlite';
        DATABASE_URL = `sqlite:${process.env.DB_STORAGE || './funkoshop.sqlite'}`;
    }
}

export default {
    PORT: process.env.PORT || 8001,
    HOST: process.env.HOST || 'localhost',
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DIALECT,
    DB_STORAGE: process.env.DB_STORAGE || './funkoshop.sqlite',
    DATABASE_URL,
    SECRET_KEY: process.env.SECRET_KEY || 'ThisIsNotSecret'
};