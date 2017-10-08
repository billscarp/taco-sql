var connection = require('../db/connect');

module.exports = function(app) {
	app.post('/api/tacos', function(req, res) {
		var taco = {
			name: req.body.name
		};
		
		connection.query('INSERT INTO tacos SET ?', taco, function(err, result) {
			if ( err ) return console.log(err);

			console.log('Taco saved successfully!');
			res.redirect('/');
		});
	});		
}