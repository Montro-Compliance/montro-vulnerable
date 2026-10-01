const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  // deliberately unsafe: user input straight into the response
  res.send('<h1>Hello ' + req.query.name + '</h1>');
});

app.listen(3000);
