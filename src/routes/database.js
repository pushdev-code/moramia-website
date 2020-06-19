const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

router.get('/', async (req,res) => {
    try {
        const product = await Products.find();
        console.log(product);
        res.send('Productos')
    }catch(err){
        res.json({message : err});
    }
});
router.get('/:name', async (req,res) => {
    try {
        const product = await Products.find({product_name : req.params.name});
        console.log(product);
        res.send('Productos')
    }catch(err){
        res.json({message : err});
    }
});

module.exports = router;