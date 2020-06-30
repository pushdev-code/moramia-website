const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

async function product(){
    const prd = await Products.find();
    for(let i = 0; i < prd.length; i++){
        router.get('/' + prd[i].product_name, async(req, res) => {
            res.render('pages/product', {
                title: 'Moramia ' + prd[i].product_name + ' <3',
                product: prd[i],
                refreshUrl: process.env.BROWSER_REFRESH_URL //browser refresh listening
            });
        });
    }  
}

product();
module.exports = router;