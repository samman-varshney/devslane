import React, { memo, useState, useEffect, useMemo, useCallback } from 'react'
import { findProduct } from '../api';
import Loader from './Loader';
import CartRow from './CartRow';
import { Link } from 'react-router-dom';
import CartList from './CartList';

function Cart({ cart, setCart }) {

    const [localCart, setLocalCart] = useState(cart);

    useEffect(() => {
        setLocalCart(cart);
    }, [cart]);


    return (

        <div className="max-w-6xl w-6xl bg-white rounded-lg shadow-md px-4 py-4 md:px-24 md:py-20 space-y-4">

            <CartList localCart={localCart} setLocalCart={setLocalCart} />

        </div>
    )
}

export default Cart
