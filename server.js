var http = require('http');

var port = 1331;

var server = http.createServer(function(req, res){
	res.write('Hello World');
	res.end();
}).listen(port);