/**
 * @description Default project file, call necessary routes
 * 
 * @author Thiago Castilho
 * @date 2019-02-16
 */

const express = require('express'),
  http = require('http'),
  signIn = require('./api/routes/sign-in'),
  signUp = require('./api/routes/sign-up'),
  search = require('./api/routes/search');

const app = express();

const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || '8080';
app.set('port', port);

app.use('/signin', signIn);
app.use('/signup', signUp);
app.use('/search', search);

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;