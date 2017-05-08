const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var db = mongoose.connect('localhost:27017/RomanjiWordsDb');
var Schema = mongoose.schema;

var RomanjiWord = require("./models/RomanjiWord");

const app =express();

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/game', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

/*Grabbing a document at random from the database*/
app.get("/api/wordatrandom",function(req,res){
	RomanjiWord.random(function(err,romanjiWord){
		if(err){
			res.send(err);
		}
        console.log(romanjiWord)
		res.send(romanjiWord);
	});
});



app.listen(3001);