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
        console.log("RESTA BACK");
        var params=req.params.calculos;
        var campos=params.split(',');
        //var num1 = parseFloat(params.num1);
        //var num2 = parseFloat(params.num2);
        var num1=parseInt(campos[0]);
        var num2=parseInt(campos[1]);
        
        console.log(num1-num2);
    },
    producto:function(req,res){
        var params=req.body;
        var num1 = parseFloat(params.num1);
        var num2 = parseFloat(params.num2);
        console.log(num1*num2);
    },
    division:function(req,res){
        var params=req.params.calculos;
        var campos=params.split(',');
        var num1 = parseFloat(params.num1);
        var num2 = parseFloat(params.num2);
        var num1=parseInt(campos[0]);
        var num2=parseInt(campos[1]);
        
        console.log(num1/num2);
    },
    potencia:function(req,res){
        var params=req.body;
        var num1 = parseFloat(params.num1);
        var num2 = parseFloat(params.num2);
        console.log(Math.pow(num1,num2));
    },
    sqrt:function(req,res){
        var params=req.body;
        var num1 = parseFloat(params.num1);
        console.log(Math.sqrt(num1));
    },
}

module.exports=controller;