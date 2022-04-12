const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name : String,
    img : String,
    countInStock : {
        type : Number,
        required : true
    }

});
exports.Product = mongoose.model('Products',productSchema,'products');