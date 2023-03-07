'use strict'
var express=require('express');
var router=express.Router();
var CalculosController=require('../controllers/calculo.controller');

router.post('/',CalculosController.suma);
router.get('/:calculos',CalculosController.resta);
router.put('/',CalculosController.producto);
router.delete('/:calculos',CalculosController.division);
router.post('/potencia',CalculosController.potencia);
router.patch('/',CalculosController.sqrt);

module.exports=router;