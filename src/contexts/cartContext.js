import { createContext, useState } from "react";


export const CartContext = createContext({
    cartItems:[],
    isCartOpen: false,
    cartCount:0,
    setCartOpen:()=>null,
    addItemToCart:()=>null
    
})

export const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([])
    const [isCartOpen,setCartOpen] = useState(false)
    const [cartCount,setCartCount] = useState(0)

    const addItemToCart = (newItem)=>{
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
        setCartCount(prev=>prev+1)
    }
    const value = {cartItems,isCartOpen,setCartOpen,cartCount,addItemToCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}