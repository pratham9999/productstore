const express = require("express");
const ProductRoutes = require("./routes/ProductRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const  mongoose  = require("mongoose");


dotenv.config();

const app = express();


mongoose.connect(process.env.MONGO_URL);

app.use(cors());
app.use(express.json());

app.use("/api/products" , ProductRoutes);




app.listen(3000 , ()=>{
    console.log("running on 3000");
    
})