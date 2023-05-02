import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export default CartContext;

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
    </CartContext.Provider>
    );
}