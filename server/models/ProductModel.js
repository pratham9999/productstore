const mongoose = require("mongoose");
const {Schema , model} = require("mongoose")

const  productSchema = new  Schema({

    name : {
        type : String,
        required : true,

    } ,

    price : {
        type :String,
        required : true,
    },

    image : {
        type : String,
        required : true,
    } 

}, {
    timestamps : true,
});


const Product = model("Product" , productSchema);
module.exports = Product;
