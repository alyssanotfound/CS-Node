var express = require('express');
var app = express();
var http = require('http');
var client = http.createClient(80, 'events.cooper.edu');

var username = 'davia317';
var password = 'dontforget7469';
var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

var header = {'Host': 'events.cooper.edu', 'Authorization': auth};
var request = client.request('GET', '/', header);

var options = {
	host: 'events.cooper.edu',
	port: 80,
	path: '/index.html'
};

app.get("https://events.cooper.edu", function(req, res){
	console.log(req.query);
	res.end(JSON.stringify(req.query) + '/n');
});

app.get('/', function(req, res){
	res.send('hello world');
});

app.listen(3000);

console.log('listening on port 3000');
