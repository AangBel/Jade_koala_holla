const pg = require('pg');

const pool = new pg.Pool({
  database: 'database_koala', 
  host: 'localhost',
  port: 5000, // Default PostgreSQL port
  max: 10, // Number of connections in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle
});

module.exports = pool;