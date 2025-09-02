import React, { useState, useEffect, useContext, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom';
import CartRow from './CartRow';
import Loader from './Loader';
import { findProduct } from '../api';
import { CartContext } from './Context';
import CartTotal from './CartTotal';

function CartList({ localCart, setLocalCart }) {
    const { handleUpdateCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Promise.all(Object.keys(localCart).map(id => findProduct(id)));
            console.log(result);
            setLoading(false);
            setProducts(result);
        }
        fetchData();
    }, [localCart])

    const subtotal = useMemo(() => {
        return products.reduce((acc, product) => {
            const quantity = localCart[product.id] || 0;
            return acc + quantity * product.price;
        }, 0).toFixed(2);
    }, [products, localCart]);
    const total = useMemo(() => {
        const sub = products.reduce(
            (prev, curr) => prev + (localCart[curr.id] || 0) * curr.price,
            0
        );

        const shipping = 50;
        const tax = sub * 0.18;

        return (sub + shipping + tax).toFixed(2);
    }, [products, localCart]);

    const handleRemoveFromCart = useCallback((prodId) => {
        const newCart = { ...localCart };
        delete newCart[prodId];
        setLocalCart(newCart);
    }, [localCart]);

    const handleQuantityChange = useCallback((prodId, quantity) => {
        const newCart = { ...localCart, [prodId]: quantity };
        setLocalCart(newCart);
    }, [localCart]);

    return (
        <>
            <div className='flex flex-col border-1 border-gray-200 '>
                <div className='w-full grid grid-cols-14 h-12 bg-gray-50 items-center border-b-1 border-gray-200 text-gray-700 font-bold'>
                    <div className="col-span-3"></div>
                    <div className="col-start-4 col-end-9">Products</div>
                    <div className="col-start-9 col-end-11">Price</div>
                    <div className="col-start-11 col-end-13">Quantity</div>
                    <div className="col-start-13 col-end-15">SubTotal</div>
                </div>
                {loading ? <Loader /> : products.length <= 0 ? <div className='flex flex-col justify-center items-center h-60 gap-4'>
                    <div className='text-center text-gray-500'>
                        Your cart is empty
                    </div>
                    <Link to='/' className='mt-4 bg-red-500 font-semibold text-white px-4 py-2 rounded'>Continue Shopping</Link>
                </div> : products.map(product => {
                    product.quantity = localCart[product.id]; product.subtotal = (localCart[product.id] * product.price).toFixed(2);
                    return <CartRow key={product.id} product={product} onRemove={handleRemoveFromCart} onQuantityChange={handleQuantityChange} />
                })}
                <div className='w-full grid grid-cols-14 h-14 bg-gray-50 items-center'>
                    <div className="col-span-6 pl-4 text-gray-700 font-semibold grid grid-cols-2">
                        <input className='border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-1 focus:ring-gray-500' type="text" placeholder='Enter coupon code' />
                        <button className={` ${products.length <= 0
                            ? "bg-red-200 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-300"} text-white px-4 py-1 rounded ml-2 active:scale-98`}>Apply Coupon</button>
                    </div>
                    <button onClick={() => handleUpdateCart(localCart)} className={`bg-red-500 hover:bg-red-300 col-end-15 mr-4 text-white py-1 px-2 font-semibold col-span-3 rounded active:scale-98  `}>Update Cart</button>
                </div>
            </div>
            <CartTotal subtotal={subtotal} total={total} length={products.length} />
        </>
    )
}

export default CartList