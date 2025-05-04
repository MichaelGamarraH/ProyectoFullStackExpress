const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'gamhinspace#04',
    database: 'nodepruebadb'
})


module.exports = mysqlPool