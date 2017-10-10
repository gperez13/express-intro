const express = require('express');
const app = express(); //app is an object with a bunch of methods to build a server

app.get('/', (request, response) => {
	response.send('Hi, Im the information the server has sent to the client');

});


app.get('/tacos', (req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get('/dud', (req, res) => {
	console.log(req)
	res.send('this is text')
})


app.get('/chorizo', (req, res) => {
	res.send('im thirsty')
})


app.listen(3000, () => {
	console.log('I AM LISTENING, SONNN...on port 3000')
})










