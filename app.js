var express = require('express');
var app = express();

app.get('/', function (req, res) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

	res.setHeader('content-type', 'text/application');
	res.send('Node.js App');
	console.log('Access from ' + ip);
});

app.listen(80, function () {
	console.log('Example app listening on port 80!');
});
