const Pool = require('pg').Pool
require("dotenv").config()

const pool = new Pool({
    user: 'postgres',
    password: 'rL7xDjZKsRBP',
    host: '193.140.229.127',
    port: 5432,
    database:'haritahacettepe'

})
module.exports = pool


