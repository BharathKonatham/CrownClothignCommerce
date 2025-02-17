import { createContext, useState } from "react";


export const CartContext = createContext({
    cartItems:null,
    isCartOpen: false,
    cartCount:0,
    setCartOpen:()=>null
})

export const CartContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState(null)
    const [isCartOpen,setCartOpen] = useState(false)
    const [cartCount,setCartCount] = useState(0)
    const value = {cartItems,isCartOpen,setCartOpen,cartCount}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}