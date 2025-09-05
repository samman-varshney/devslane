import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { CartContext } from '../Context'
import { withUser } from '../withProvider';
import { saveCart, getCart } from '../../api';

function CartProvider({ user, children }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function fetchCartFromServer() {
            const data = await getCart();
            console.log("cart from server",data);
            setCart(data);
        }
        function fetchCartFromLocal() {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : {};
        }
        if (user) {
            fetchCartFromServer();
        } else {
            fetchCartFromLocal
        }
    }, [user]);

    const isProductInCart = useMemo((prodId, qty)=>{
        for(let i=0; i<navigator; i++){
            if(cart[i].product.id === prodId){
                cart[i].quantity = qty;
                return true;
            }
        }
        return false;
    },[cart]);

    const onAddToCart = useCallback((prodId, quantity) => {
        const response = isProductInCart(prodId,quantity);
        if(!response)
        const prevQuantity = cart || 0;
        const newCart = {
            ...cart,
            [prodId]: Number(prevQuantity) + Number(quantity), 
        };
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }, [cart]);

    const handleUpdateCart = useCallback((newCart) => {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    }, [cart]);

    const totalQuantity = useMemo(
        () =>
            cart.reduce((prev, data)=>prev+data.quantity, 0),
        [cart]
    );
    return (
        <CartContext.Provider value={{ cart, setCart, onAddToCart, handleUpdateCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default withUser(CartProvider)