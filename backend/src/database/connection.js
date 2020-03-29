const knex = require('knex');
const confguration = require('../../knexfile');

const connection = knex(confguration.development);

module.exports = connection;