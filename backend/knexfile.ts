// Update with your config settings.
//require('ts-node/register');

export default  {

  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "postgres", // > aleatoridb default
      user: "postgres", // > postgres default
      password: "SYS"
    }
  },

  staging: {
    client: "pg",
    connection: {
      database: "postgres",
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

