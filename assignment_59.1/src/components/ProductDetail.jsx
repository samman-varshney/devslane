import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { findProduct } from "../api";
import Loader from "./Loader";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import ProductNotFound from "./NotFound";
const ProductPage = ({onAddToCart}) => {

    const { id } = useParams()
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchProduct(id) {
            try {
                const res = await findProduct(id);
                setProduct(res);
            }catch(err){
                console.log('no product find')
            }
            setLoading(false);
            setQuantity(1);
        }
        fetchProduct(id);
    }, [id])

    const handleAddToCart = ()=>{
        onAddToCart(id, quantity);
    }

    return (


        <>

            {loading ? <Loader />: !product ? <ProductNotFound query={id} /> : <div className=" max-w-5xl w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-10 bg-white shadow-lg p-8 rounded-lg">
                <div className="flex-1">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-[400px] h-[400px] object-cover mx-auto"
                    />
                </div>

                <div className="flex flex-col flex-1 text-gray-700 h-100">
                    <h2 className="text-3xl font-semibold mb-3">
                        {product.title}
                    </h2>
                    <p className="text-2xl font-bold text-gray-800 mb-4">${product.price}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        {product.description}
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
                        <Link to={'/'} ><button className="border border-sm rounded-lg px-3 py-2 bg-sky-400 text-gray-100 text-base hover:bg-sky-500 transition">Back</button></Link>
                    </div>
                    <div className="mt-auto">
                    <div className="flex flex-row gap-2 mt-5 justify-between mt-10">

                        <PrevButton {...{ id: id, lowerBound: 1 }} />
                        <NextButton id={id} upperBound={194} />
                    </div>
</div>
                </div>
            </div>}
        </>


    );
};

export default ProductPage;
