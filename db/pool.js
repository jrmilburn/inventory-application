const { Pool } = require("pg");

require('dotenv').config();

const { HOST, USER_REMOTE, DATABASE, PASSWORD, DB_PORT } = process.env;

 const dbConnection = new Pool({
    host: HOST,
    user: USER_REMOTE,
    database: DATABASE,
    password: PASSWORD,
    port: DB_PORT
});

console.log(dbConnection);

module.exports = dbConnection;