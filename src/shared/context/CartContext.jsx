import { useContext, useState } from "react"
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider=({children})=>{
    const[cart,setCart]=useState({})
    
    const addItem=(item)=>{
        setCart((prev)=>{
            const existing=prev[item.id]
            return{
                ...prev,
                [item.id]:{
                    ...item,
                    qty:existing?existing.qty+1:1
                }
            }
        })
    }
    
    const removeItem=(id)=>{
        setCart((prev)=>{
            const copy={...prev}
            delete copy[id]
            return copy
        })
    }
    
    const updateQty=(id,qty)=>{
        setCart((prev)=>{
            const existing = prev[id];
            if(!existing) return prev;
            if(qty <= 0){
                const copy = { ...prev };
                delete copy[id];
                return copy;
            }
            return {
                ...prev,
                [id]:{
                    ...existing,
                    qty
                }
            }
        })
    }
    const clearCart = () => setCart({});

    const cartItems = Object.values(cart);

    const totalItems=cartItems.reduce((sum,item)=>sum+item.qty,0)
    const totalPrice=cartItems.reduce((sum,item)=>sum+(item.price * item.qty),0)
    
    return(
        <CartContext.Provider
        value={{
        cartItems,
        addItem,
        updateQty,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
        >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);