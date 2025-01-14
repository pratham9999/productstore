/* eslint-disable react/prop-types */
import axios from "axios"
import { useContext, useState } from "react"
import { ProductsContext } from "../Provider/ProductsContext";
import { useNavigate } from "react-router-dom";
export default function Create({toggle}) {
   
    const navigate = useNavigate();
   const {setProducts} = useContext(ProductsContext);
    const [name , setName] = useState("");
    const [price , setPrice] = useState("");
    const [image , setImage] = useState("");

  return (
    <div className="flex items-center justify-center">
          <div className={` ${toggle==="white" ? "bg-white" : "bg-slate-800"} p-6 rounded shadow-md w-96`}>
            <h2 className=" text-xl font-bold mb-4 ">Create Product</h2>

            <div className="mb-4">
              <label className="block font-bold mb-1">Name</label>
              <input
                type="text"    
                className="w-full border p-2 rounded text-black"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Price</label>
              <input
                type="number"
                value={price}
                onChange={(e)=> setPrice(e.target.value)}
                className="w-full border p-2 rounded text-black"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Image URL</label>
              <input
                type="text"
                value={image}
                onChange={(e)=> setImage(e.target.value)}
                className="w-full border p-2 rounded text-black"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={async ()=>{
                    
                    const res = await axios.post("http://localhost:3000/api/products/create" , {
                                   name,price,image
                    })

                    if(!res.data.success){
                      return alert("something is wrong")
                    }
                    else{
                      setProducts((prevProducts)=>[...prevProducts , res.data.data])
                      navigate("/")
                     
                    }
                      
                     
                      
                    
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
  )
}
