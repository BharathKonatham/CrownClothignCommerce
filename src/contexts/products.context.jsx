import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json"
import { Value } from "sass";
export const ProductContext = createContext({
    products:[],
})

export const ProductsProvider = ({children})=>{
    const[products,setProducts] = useState(SHOP_DATA)

    const Value = {products}
    return <ProductContext.Provider value={Value} >{children}</ProductContext.Provider>
}