const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productId : String,
    product_name : String,
    product_price : Number,
    product_image : String,
    product_image2 : String,
    product_description : String,
    product_gallery : {
        image1 : String,
        image2 : String,
        image3 : String,
        image4 : String
    },
    product_weight : Number,
    product_in_stock : Number
});

module.exports = mongoose.model('Products', productSchema);