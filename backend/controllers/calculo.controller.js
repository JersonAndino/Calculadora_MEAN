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
        //console.log(num1+num2);
        var calculo=new Calculo();
        var cadena=num1.toString()+" + "+num2.toString();
        var resultado=num1+num2;
        calculo.calculo=cadena;
        calculo.resultado=resultado;
        calculo.save();
        return res.status(402).send({result:resultado});
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
        
        var calculo=new Calculo();
        var cadena=num1.toString()+" - "+num2.toString();
        var resultado=num1-num2;
        calculo.calculo=cadena;
        calculo.resultado=resultado;
        calculo.save();

        //console.log(num1-num2);
        return res.status(402).send({result:resultado});

    },
    producto:function(req,res){
        var params=req.body;
        var num1 = parseFloat(params.num1);
        var num2 = parseFloat(params.num2);
        //console.log(num1*num2);

        var calculo=new Calculo();
        var cadena=num1.toString()+" x "+num2.toString();
        var resultado=num1*num2;
        calculo.calculo=cadena;
        calculo.resultado=resultado;
        calculo.save();

        return res.status(402).send({result:resultado});

    },
    division:function(req,res){
        var params=req.params.calculos;
        var campos=params.split(',');
        var num1 = parseFloat(params.num1);
        var num2 = parseFloat(params.num2);
        var num1=parseInt(campos[0]);
        var num2=parseInt(campos[1]);
        
        var calculo=new Calculo();
        var cadena=num1.toString()+" / "+num2.toString();
        var resultado=num1/num2;
        calculo.calculo=cadena;
        calculo.resultado=resultado;
        calculo.save();

        //console.log(num1/num2);
        return res.status(402).send({result:resultado});

    },
    potencia:function(req,res){
        var params=req.body;
        var num1 = parseFloat(params.num1);
        var num2 = parseFloat(params.num2);

        var calculo=new Calculo();
        var cadena=num1.toString()+" ^ "+num2.toString();
        var resultado=Math.pow(num1,num2);
        calculo.calculo=cadena;
        calculo.resultado=resultado;
        calculo.save();

        //console.log(Math.pow(num1,num2));
        return res.status(402).send({result:resultado});

    },
    sqrt:function(req,res){
        var params=req.body;
        var num1 = parseFloat(params.num1);
        console.log(Math.sqrt(num1));

        var calculo=new Calculo();
        var cadena="sqrt("+num1.toString()+")";
        var resultado=Math.sqrt(num1);
        calculo.calculo=cadena;
        calculo.resultado=resultado;
        calculo.save();

        return res.status(402).send({result:resultado});
    },
    getHistory:function(req,res){
        Calculo.find({}).sort().exec()
        .then(result => {
            if (!result) return res.status(404).send({message:'No hay historial para mostrar'});
            //console.log(result);
            return res.status(200).send({result});
        })
        .catch(err => {
            return res.status(500).send({message:'Error al recuperar los datos'});
        });
    }
}

module.exports=controller;