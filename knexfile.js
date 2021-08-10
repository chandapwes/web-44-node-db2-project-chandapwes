// no need to change this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations', // sqlite
  },
  seeds: {
    directory: './data/seeds',
  },
  pool: { // sqlite
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/dealer.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
}
