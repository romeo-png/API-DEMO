let knex = require("./knex");
async function getAll (){
    return await knex('adress').select('*');
}
module.exports = {
    getAll
}