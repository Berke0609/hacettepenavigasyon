
const Pool = require('pg').Pool
require("dotenv").config()

const pool = new Pool({
    user: 'postgres',
    password: '***********',
    host: '***********',
    port: 5432,
    database:'haritahacettepe'

})
module.exports = pool
