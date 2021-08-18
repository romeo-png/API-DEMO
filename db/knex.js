let knex = require("knex")
let connectionKnex = knex({
    client : 'pg',
    version: '5.6',
    Connection:{
        host:'127.0.0.1',
        user :'adress',
        password:'mypass',
        database:'my_db',
    }
})
module.exports = connectionKnex;
