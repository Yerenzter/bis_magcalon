const mariadb = require("mariadb");
    
const pool = mariadb.createPool({
  host: Bun.env.DB_HOST,
  user: Bun.env.DB_USER,
  password: Bun.env.DB_PASSWORD,
  database: Bun.env.DB_NAME,
});

module.exports = Object.freeze({ pool: pool });
