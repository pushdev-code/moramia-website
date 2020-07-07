const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

router.get('/:name', async (req, res) => {
    try {
        const product = await Products.findOne({
            url_slug: req.params.name.toLowerCase()
        });
        if (!product) return res.status(404).render("pages/error", {
            title: "Page not found",
            error: 404,
            refreshUrl: process.env.BROWSER_REFRESH_URL, //browser refresh listening
        });
        res.render("pages/product", {
            title: "Moramia <3",
            product,
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