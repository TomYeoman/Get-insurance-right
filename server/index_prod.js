var express = require('express');
var path = require('path');
// var compression = require('compression');

var app = express();
// app.use(compression());

app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use('/images',express.static(path.join(__dirname, 'public/assets')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3400, () => console.log("Running on localhost 3400"))
