const express = require('express');
const helmet = require('helmet');
const app = express();
const bcrypt = require('bcrypt');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com'],
    }
  },
  noCache: true
}))










module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + 'views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🍀 Useful Programmer Info Security App Started on Port ${PORT}`)
});
