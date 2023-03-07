'use strict'
var fs=require('fs');
const path=require('path');
var Calculo=require('../models/calculo');
const session = require('express-session');

var controller={
    suma:function(req,res){
        var params=req.params;
        console.log("SUMA");
    },
    resta:function(req,res){
        var params=req.params;
        console.log("RESTA");
    },
    producto:function(req,res){
        var params=req.params;
        console.log("PRODUCTO");
    },
    division:function(req,res){
        var params=req.params;
        console.log("DIVISION");
    },
    potencia:function(req,res){
        var params=req.params;
        console.log("POTENCIA");
    },
    sqrt:function(req,res){
        var params=req.params;
        console.log("SQRT");
    }
}

module.exports=controller;