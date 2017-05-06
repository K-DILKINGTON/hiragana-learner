var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var romanjiWordSchema = new Schema({
romanji:{type:String,required:true},
definition:{type:String,required:true}
});

//This handly little function was found on stackoverflow
//TODO: Add the url of the relevant answer
romanjiWordSchema.statics.random =  function(callback) {
  this.count(function(err, count) {
    if (err) {
      return callback(err);
    }
    var rand = Math.floor(Math.random() * count);
    this.findOne().skip(rand).exec(callback);
  }.bind(this));
};

var RomanjiWord = mongoose.model('RomanjiWord',romanjiWordSchema,'romanjiWords');

module.exports=RomanjiWord;