import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query,where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productCollection = collection(db, "products")
    let consulta = productCollection;
    
    if(category){
      let productCollectionFiltered = query(
        productCollection,
        where("category","==",category)
      );
      consulta = productCollectionFiltered;
    }

    getDocs(consulta).then(res => {
      let arrayProducts = res.docs.map((elemento) =>{
        return {...elemento.data(), id: elemento.id}
      })

      setProducts(arrayProducts)
    })
    .finally(()=>setIsLoading(false))
    

  }, [category]);

  return (
    <>
      {isLoading ? (
        <h2>Cargando Productos</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
