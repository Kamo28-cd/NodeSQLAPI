const knex = require('knex');
//pass in connection string when using mysql
const connectedKnex = knex({
	client: 'sqlite3',
	connection: {
		filename: 'cwc.sqlite3'
	}
});

module.exports = connectedKnex;