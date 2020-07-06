const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

router.get('/:name', async (req,res) => {
    try {
        const product = await Products.findOne({product_name : req.params.name});
       res.render("pages/product", {
            title: "Moramia <3",
            product,
            refreshUrl: process.env.BROWSER_REFRESH_URL, //browser refresh listening
          });
    }catch(err){
        res.json({message : err});
    }
});

module.exports = router;