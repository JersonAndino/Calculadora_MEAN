'use strict'
var express=require('express');
var router=express.Router();
var CalculosController=require('../controllers/calculo.controller');

router.post('/',CalculosController.suma);
router.get('/',CalculosController.resta);
router.put('/',CalculosController.producto);
router.delete('/',CalculosController.division);
router.purge('/',CalculosController.potencia);
router.patch('/',CalculosController.sqrt);

module.exports=router;