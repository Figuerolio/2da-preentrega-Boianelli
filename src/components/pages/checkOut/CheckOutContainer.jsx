import { useContext,useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { CheckOut } from "./CheckOut";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

import React from 'react'

export const CheckOutContainer = () => {
    const [userInfo,setUserInfo] = useState({
        name:"",
        phone:"",
        email:"",
    })
    const [orderId,setOrderId] = useState(null)

    const {cart,totalPriceCart,limpiarCart} = useContext(CartContext)
    
    let overAllPrice = totalPriceCart()

    const envioFormulario = (event) =>{
        event.preventDefault();
        let order ={
            buyer:userInfo,
            items:cart,
            total:overAllPrice,
        }
        let ordersCollection=collection(db,"orders")
        
        addDoc(ordersCollection,order).then((res)=> setOrderId(res.id))

        cart.forEach((product)=>{

            let refDoc = doc(db, "products", product.id )
      
            updateDoc( refDoc , {stock: product.stock - product.quantity } )
          })
          
          limpiarCart()
          
    }
    const capturar = (event)=>{
        setUserInfo({...userInfo,[event.target.name]:event.target.value});
    };



  return <CheckOut orderId={orderId} envioFormulario={envioFormulario} capturar={capturar} />
}
