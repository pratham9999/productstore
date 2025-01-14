const express= require("express");
const router = express.Router();
const Product = require("../models/ProductModel")


router.get("/" , async (req ,res)=>{
    try {

        const products = await Product.find();
        res.json({
            success : true,
            data : products
        })
        
    } catch (error) {
         res.json({
            success : false,
            message : "something went wrong"
         })
    }
})

router.post("/create" , async (req , res)=>{

    const {name , price , image} = req.body;
    if(!name || !price || !image){
        return res.json({
            success : false,
            message : "Please Provide full information"
        })
    }
    const newProduct = await Product.create({
        name,price,image
    }) 
    res.status(201).json({
        success : true,
        data : newProduct 
    })
})

router.delete("/delete/:id" , async (req,res)=>{
    const {id}= req.params;
    try {
        await Product.findByIdAndDelete(id);

        res.json({
           success : true,
           message : "Product deleted"
          
        })
        
    } catch (error) {
         console.log("some error");
         res.json({
            success : false,
            message : "Some error occured"
         })
         
    }

  
})

router.put("/update/:id" , async (req, res)=>{
   const {id} = req.params;
   const product = req.body;
   const updatedProduct = await Product.findByIdAndUpdate(id , product , {new : true}) ;

   res.json({
     success : true,
     data : updatedProduct
   })
   
})


module.exports = router ;