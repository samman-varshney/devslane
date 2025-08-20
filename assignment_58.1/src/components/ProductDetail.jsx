import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from '../assets/products'
import { Link } from "react-router-dom";
const ProductPage = () => {

    const {id} = useParams()
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
 
    useEffect(()=>{
        const foundProduct = products.find((p) => p.id == id);
        setProduct(foundProduct);
    },[id])

    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) to cart! 🛒`);
    };

    return (

        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10 bg-white shadow-lg p-8 rounded-lg">

          
            <div className="flex-1">
                <img
                    src={product.url}
                    alt={product.title}
                    className="w-[400px] h-[400px] object-cover mx-auto"
                />
            </div>

            <div className="flex-1 text-gray-700">
                <h2 className="text-3xl font-semibold mb-3">
                    {product.title}
                </h2>
                <p className="text-2xl font-bold text-gray-800 mb-4">${product.price}</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
                    consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
                    Numquam eius modi tempora incidunt lores ta porro ame.
                </p>

             
                <div className="flex items-center gap-4">
                    <label htmlFor="quantity" className="sr-only">Quantity</label>
                    <input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-16 text-center border border-gray-300 rounded-md py-2 px-2 focus:outline-none"
                    />
                    <button
                        onClick={handleAddToCart}
                        className="bg-red-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-600 transition"
                    >
                        ADD TO CART
                    </button>
                    <Link to={'/'} ><button className="border border-sm rounded-lg px-3 py-2 bg-sky-400 text-gray-100 text-base">Back</button></Link>
                </div>
            </div>
        </div>

    );
};

export default ProductPage;
