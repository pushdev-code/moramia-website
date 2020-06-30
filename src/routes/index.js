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

async function product(){
    const prd = await Products.find();
    for(let i = 0; i < prd.length; i++){
        router.get('/product/' + prd[i].product_name, async(req, res) => {
            res.render('pages/product', {
                title: 'Moramia ' + prd[i].product_name + ' <3',
                id: prd[i].productId,
                nombre: prd[i].product_name,
                precio: prd[i].product_price,
                imagen: prd[i].product_image,
                imagen2: prd[i].product_image2,
                descripcion: prd[i].product_description,
                galeria1: prd[i].product_gallery.image1,
                galeria2: prd[i].product_gallery.image2,
                galeria3: prd[i].product_gallery.image3,
                galeria4: prd[i].product_gallery.image4,
                peso: prd[i].product_weight,
                existencia: prd[i].product_in_stock,
                refreshUrl: process.env.BROWSER_REFRESH_URL //browser refresh listening
            });
        });
    }  
}

product();
module.exports = router;