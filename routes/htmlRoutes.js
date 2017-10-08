var connection = require('../db/connect');

module.exports = function(app) {
	app.get("/", function(req, res) {
		connection.query('SELECT * FROM tacos', function(err, tacos) {
			if ( err ) return console.log(err);

			res.render("index", {tacos : tacos});
		});
	});
		// app.get("/contact")
}

