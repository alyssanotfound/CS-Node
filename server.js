var express = require('express');
var request = require('request');
var app = express();


// request.get('https://events.cooper.edu', {
//   'auth': {
//     'user': 'davis4',
//     'pass': 'dontforget7469',
//     'sendImmediately': false
//   }
// }, function( error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body);
// 	} else if (!error && response.statusCode == 401) {
// 		console.log(body);
// 	} else {
// 		console.log(response.statusCode);
// 	}
// });

request.get('https://events.cooper.edu/cgi-bin/Calcium40.pl?CalendarName=CooperRooms&Op=RSS&Format=rss', {
  'auth': {
    'user': 'davis4',
    'pass': 'dontforget7469',
    'sendImmediately': false
  }
}, function( error, response, body) {
	if (!error) {
		console.log(body);
	} else {
		console.log(response.statusCode);
	}
});

app.get('/', function(req, res){
	res.send('hello world & moshie');
});

app.listen(3000);

console.log('listening on port 3000');
