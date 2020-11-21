// Update with your config settings.
require('ts-node/register');

export default  {

  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
<<<<<<< HEAD
      database: "aleatoridb",
      user: "postgres",
      password: "0000"
=======
      database: "aleatoriDB", //aleatorichat :> default
      user: "Aleatori_user",  //postgres :> default
      password: "0000" //same password
>>>>>>> origin/wip/Lhimbo
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

