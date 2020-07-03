const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

async function product(){
    const products = await Products.find();
    for(const product of products){
    const { product_name } = product;
        router.get('/' + product_name, async(req, res) => {
            res.render('pages/product', {
                title: `Moramia ${product_name}`,
                product,
                refreshUrl: process.env.BROWSER_REFRESH_URL //browser refresh listening
            });
        });
    }
} 

product();
module.exports = router;