const mariadb = require('mariadb');
const db = () => {
	return mariadb.createConnection({
		host: 'db', 
		user:'studentprojekt', 
		password: 'asdf123!##',
		database: 'studentprojekt',
	});
}

module.exports = db