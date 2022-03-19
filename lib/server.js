var config = require('./config');
var express = require('express');
var path = require('path');

const app = express();

// set the view engine to ejs
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
console.info(`Server is running on port: ${config.port}`);
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public'));
});

app.listen(config.port);
