import config from './config.js';
import express from 'express';
import { resolve } from 'path';
import serverRenderer from './serverRenderer.js'

const app = express();

// set the view engine to ejs
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page
console.info(`Server is running on port: ${config.port}`);
app.get('/', function(req, res) {
  const initContent = serverRenderer();
  console.log(initContent);
  res.sendFile(resolve(__dirname, 'public'));
});

app.listen(config.port);
