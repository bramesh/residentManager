const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen('8080', function() {
	console.log('Listen on port 8080');
})