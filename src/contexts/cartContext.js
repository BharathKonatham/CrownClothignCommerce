import { createContext, useEffect, useState } from "react";
import { useReducer } from "react";

export const CartContext = createContext({
    cartItems: [],
    isCartOpen: false,
    cartCount: 0,
    setCartOpen: () => null,
    addItemToCart: () => null,
    decreaseQuantity: () => null,
    increaseQuantity: () => null,
    removeItem: () => null,
    cartTotal: 0
})


export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL'
}

const cartReducer = (state, action) => {

    const { type, payload } = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: payload
            };
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
}
const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
    cartCount: 0,
    cartTotal: 0
}
export const CartContextProvider = ({ children }) => {
    // const [cartItems, setCartItems] = useState([])
    // const [isCartOpen, setCartOpen] = useState(false)
    // const [cartCount, setCartCount] = useState(0)
    // const [cartTotal,setCartTotal] = useState(0)

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const { cartItems, isCartOpen, cartCount,cartTotal } = state
    useEffect(() => {
       const total = cartItems.length ? cartItems.reduce((total, item) => total + item.quantity * item.price, 0) : 0
       dispatch({ type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: total })
         //setCartTotal(total)
    }, [cartItems])

    useEffect(() => {
        const cartCount = cartItems.length ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0
        dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT, payload: cartCount })
        //setCartCount(cartCount)
    }, [cartItems])
    
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

        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updatedCart })
        //setCartItems(updatedCart);
    }

    const removeItem = (removableItem) => {
        const newCartItems = cartItems.filter(item => item.id !== removableItem.id)

        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems })
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
        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: updatedCart })
        //setCartItems(updatedCart);
    }


    const addItemToCart = (newItem) => {
        const newCartItems = (oldCart) => {
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
        };
        dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems(cartItems) })
        dispatch({ type: CART_ACTION_TYPES.SET_CART_COUNT, payload: cartCount + 1 })
        //setCartCount(prev => prev + 1)
    }
    const setCartOpen = (isOpen) => {
        dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: isOpen })
    }
    const value = {
        cartItems, isCartOpen, setCartOpen, cartCount, addItemToCart, increaseQuantity,
        decreaseQuantity, removeItem, cartTotal
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}