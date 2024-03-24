import React, { useState } from 'react'
import { createContext } from 'react'
import Swal from 'sweetalert2'

 export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart ] = useState([])

    const addToCart = (product) => {
      
      let existe = checkCart(product.id)
      
      if(existe){

        let newCart = cart.map((elemento)=>{
        
          if(elemento.id === product.id){
            return {...elemento, quantity: product.quantity}
          }else{
            return elemento
          }
        }) 

        setCart(newCart)
      }else{
        setCart([...cart,product])
      }
    }
    const limpiarCart = ()=>{
    setCart ([])
 }

    const checkCart = (id)=>{
      let existe = cart.some((elemento)=> elemento.id ===id)
      return existe
    }

    const removeById = (id) => {
      let newArray = cart.filter((elemento)=> elemento.id !== id)
      setCart(newArray)
    }
    
    const totalQuantityCart = () => {
      let totalItems = cart.reduce((acc,elemento)=>{
        return acc + elemento.quantity
      },0)
      return totalItems
    }
    
    const totalPriceCart = ()=> {
      let totalPrice = cart.reduce((acc,elemento)=>{
        return acc + (elemento.quantity * elemento.price)
      },0)
      return totalPrice
    }
    
    const totalQuantityId = (id) => {
      let quantityId = cart.find((elemento)=> elemento.id === id)  
      if(quantityId){
        return quantityId.quantity
      }else{
        return quantityId
      }
    }
    let data= {
        cart,
        addToCart,
        limpiarCart,
        removeById,
        totalQuantityCart,
        totalPriceCart,
        totalQuantityId
    }

    
  
  return<CartContext.Provider value={data}>
    {children}
    </CartContext.Provider>
  
}
