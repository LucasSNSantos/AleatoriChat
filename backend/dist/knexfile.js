"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
require('ts-node/register');
exports.default = {
    development: {
        client: "pg",
        connection: {
            host: "127.0.0.1",
            database: "aleatorichat",
            user: "postgres",
            password: "0000"
        }
    },
    staging: {
        client: "pg",
        connection: {
            database: "aleatoriDB",
            user: "admin",
            password: "randomadmin"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },
    production: {
        client: "pg",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
