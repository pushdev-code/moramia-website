const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        if (!products) return res.status(404).render("pages/error", {
            title: "Page not found",
            error: 404,
            refreshUrl: process.env.BROWSER_REFRESH_URL, //browser refresh listening
        });
        res.render("pages/index", {
            title: "Moramia <3",
            products: products,
            refreshUrl: process.env.BROWSER_REFRESH_URL, //browser refresh listening
        });
    } catch (err) {
        console.log(err);
        res.status(500).render("pages/error", {
            title: "Internal server error",
            error: 500,
            refreshUrl: process.env.BROWSER_REFRESH_URL, //browser refresh listening
        });
    }
});

module.exports = router;