// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "grace-web-store",
      user: "postgres",
      password: "r6r5bb!!",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  test: {
    client: "postgresql",
    connection: {
      database: "test-grace-web-store",
      user: "postgres",
      password: "r6r5bb!!",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
