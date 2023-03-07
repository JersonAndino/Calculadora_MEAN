'use strict'
var fs=require('fs');
const path=require('path');
var Calculo=require('../models/calculo');
const session = require('express-session');
const { param } = require('../app');

var controller={
    suma:function(req,res){
        var params=req.body;
        var num1 = parseFloat(params.num1);
        var num2 = parseFloat(params.num2);
        console.log(num1+num2);
        //return res.status(200).send({resultado:num1+num2});
    },
    resta:function(req,res){
        var params=req.params;
        //var num1 = parseFloat(params.num1);
        //var num2 = parseFloat(params.num2);

        console.log(params);
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