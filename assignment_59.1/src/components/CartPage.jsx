import React, { memo, useState, useEffect, useMemo, useCallback } from 'react'
import { findProduct } from '../api';
import Loader from './Loader';
import CartRow from './CartRow';
import { Link } from 'react-router-dom';
import CartList from './CartList';

function Cart({ cart, setCart }) {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Promise.all(Object.keys(cart).map(id => findProduct(id)));
            console.log(result);
            setLoading(false);
            setProducts(result);
        }
        fetchData();
    }, [cart])
    const subtotal = useMemo(() => {
        return products.reduce(
            (prev, curr) => prev + (cart[curr.id] || 0) * curr.price,
            0
        ).toFixed(2);
    }, [cart, products]);

    const total = useMemo(() => {
        const sub = products.reduce(
            (prev, curr) => prev + (cart[curr.id] || 0) * curr.price,
            0
        );

        const shipping = 50;      
        const tax = sub * 0.18;    

        return (sub + shipping + tax).toFixed(2);
    }, [cart, products]);


    return (
        <>
            {loading ? <Loader /> :
                <div className="max-w-6xl w-6xl bg-white rounded-lg shadow-md  px-24 py-20 space-y-4">
                    <CartList products={products} cart={cart} />
                    <div className='w-full grid grid-cols-2 gap-5'>
                        <div className='col-start-2 flex flex-col border-1 border-gray-200'>

                            <div className='text-xl text-gray-400 font-bold border-b border-gray-200 p-2 bg-gray-50'>Cart Totals</div>
                            <div className='grid grid-cols-2  p-2  border-b border-gray-200'>
                                <span className='font-semibold text-gray-700 pl-5'>Subtotal</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className='grid grid-cols-2  p-2  border-b border-gray-200'>
                                <span className='font-semibold text-gray-700 pl-5'>Total</span>
                                <span>${total}</span>
                            </div>
                            <div className='px-2 py-5 w-full'>
                            <Link to={products.length <= 0 ? "#" : "/checkout"} className={`font-semibold block w-full text-white text-center px-4 py-2 rounded  ${products.length <= 0
                                ? "bg-red-200 cursor-not-allowed"
                                : "bg-red-500 hover:bg-red-300"} `}>Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default memo(Cart)
