const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

router.get('/', async (req,res) => {
    try {
        const prds = await Products.find();
        res.render("pages/index", {
            title: "Moramia <3",
            products : prds,
            refreshUrl: process.env.BROWSER_REFRESH_URL, //browser refresh listening
          });
    }catch(err){
        res.json({message : err});
    }
});

module.exports = router;