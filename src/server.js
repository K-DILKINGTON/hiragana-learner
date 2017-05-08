const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('bodyParser');

const app =express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});



app.listen(3000);