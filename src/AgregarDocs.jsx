import React from 'react'
import { addDoc,collection } from 'firebase/firestore'
import { db } from './firebaseConfig'
import { products } from './asyncMock'

export const AgregarDocs = () => {
    const rellenarDb = () => {
        let productsCollection = collection(db,"products")
    
        products.forEach((product)=>{
            addDoc(productsCollection,product)
        })
    }


  return (
    <div><button onClick={rellenarDb}>
        AgregarDocs
        </button></div>
  )
}
