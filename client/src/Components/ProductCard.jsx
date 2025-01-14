/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

export default function ProductCard({ name, price, image , id , onUpdate , onDelete }) {
  const [modal , setModal] = useState(false);
  const [newName , setnewName] = useState(name);
  const [newPrice , setNewPrice] = useState(price);
  const [newImg , setnewImg] = useState(image);

  return (
    <div className="flex flex-col items-center w-full  max-w-xs">
      <div className="h-40 pb-2 ">
        {" "}
        <img className="max-h-full max-w-full" src={image} />{" "}
      </div>
      <div className="bg-blue-300 w-full flex justify-between items-center border shadow-sm py-2 px-4">
        <div className="flex-1">
        <div className="  bg-blue-350 border flex flex-col  items-center justify-center px-4 py-2 mx-auto ">
        <div className="font-bold ">{name}</div>
        <div className="">{price}</div>
        </div>
        </div>

        <div className="flex-1 flex justify-end">
        <div className=" flex  items-center space-x-2 p-2">
        
        <div onClick={async ()=>{
          const res = await axios.delete(`http://localhost:3000/api/products/delete/${id}`)
          if(!res.data.success){
             return alert("cant delete")
          }
            onDelete(id)
 
        }} className="cursor-pointer">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-red-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
        </div>
      
    
        <div onClick={()=>{
          setModal(true)
        }} className="cursor-pointer">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-green-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
            clipRule="evenodd"
          />
        </svg>
        </div>
      
    </div>
        </div>
        
      </div>

      { modal &&(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>

            <div className="mb-4">
              <label className="block font-bold mb-1">Name</label>
              <input
                type="text"    
                className="w-full border p-2 rounded"
                value={newName}
                onChange={(e)=> setnewName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Price</label>
              <input
                type="number"
                value={newPrice}
                onChange={(e)=> setNewPrice(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="block font-bold mb-1">Image URL</label>
              <input
                type="text"
                value={newImg}
                onChange={(e)=> setnewImg(e.target.value)}
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={async ()=>{
                    
                    const res =  await axios.put(`http://localhost:3000/api/products/update/${id}` , {
                            name: newName,
                            price : newPrice,
                            image : newImg
                    })

                    if(res.data.success){
                            onUpdate(res.data.data)
                            setModal(false)
                      
                    }else{
                       alert("failed to update the product")
                    }



                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )

      }

     
    </div>
  );
}
