'use strict'
const { kStringMaxLength } = require('buffer');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CalculoSchema=Schema({
    calculo:String,
    resultado:Object
});

module.exports=mongoose.model('Calculo',CalculoSchema);