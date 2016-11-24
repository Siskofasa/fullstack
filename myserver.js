var greetings = require('./greetings.js');
let message = greetings.sayHelloInEnglish();
console.log(message);
console.log(greetings.sayHelloInSpanish());
var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Hello world!')
})
app.get('/test', function(req, res) {
	res.send('Dit is een test!')
})

app.listen(3000, function() {
	console.log('express listening on port 3000!')
})