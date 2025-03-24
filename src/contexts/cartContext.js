import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    cartItems: [],
    isCartOpen: false,
    cartCount: 0,
    setCartOpen: () => null,
    addItemToCart: () => null,
    decreaseQuantity: () => null,
    increaseQuantity: () => null,
    removeItem: () => null,
    cartTotal:0
})


export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setCartOpen] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)

    useEffect(()=>{
        cartItems.length? setCartTotal(cartItems.reduce((total, item) => total + item.quantity * item.price,0)):setCartTotal(0)
    },[cartItems])

    useEffect(()=>{
        cartItems.length? setCartCount(cartItems.reduce((total, item) => total + item.quantity,0)):setCartCount(0)
    },[cartItems])
    const increaseQuantity = (item) => {
        const { id } = item
        const updatedCart = cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: (item.quantity && item.quantity + 1)
                }
            }
            return item
        })
        setCartItems(updatedCart);
    }

    const removeItem = (removableItem)=>{
        setCartItems(cartItems.filter(item => item.id !== removableItem.id))
    }
    const decreaseQuantity = (item) => {
        const { id, quantity } = item
        let updatedCart;
        if (quantity === 1) {
            updatedCart = cartItems.filter(item => item.id !== id)
        } else {
            updatedCart = cartItems.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                }
                return item
            })
        }

        setCartItems(updatedCart);
    }


    const addItemToCart = (newItem) => {
        setCartItems((oldCart) => {
            const existingItem = oldCart.find((item) => item.id === newItem.id);

            if (existingItem) {
                // If item exists, update its quantity
                return oldCart.map((item) =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If item is new, add it with quantity 1
                return [{ ...newItem, quantity: 1 }, ...oldCart];
            }
        });
        setCartCount(prev => prev + 1)
    }
    const value = {
        cartItems, isCartOpen, setCartOpen, cartCount, addItemToCart, increaseQuantity,
        decreaseQuantity,removeItem,cartTotal
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}