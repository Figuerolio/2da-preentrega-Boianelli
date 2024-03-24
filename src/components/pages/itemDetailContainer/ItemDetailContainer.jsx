import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../asyncMock";
import { ItemDetail } from "./ItemDetail";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {addToCart, totalQuantityId} = useContext(CartContext);
  const initial = totalQuantityId(id)

  useEffect(() => {
    setIsLoading(true)
    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection,id)
    getDoc(refDoc).then(res=>{
      setItem({...res.data(), id :res.id})
  }).finally(()=> setIsLoading(false))
  },[id]);
   

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
    Swal.fire("Item Agregado al Carrito")
  };
  return (
    <>
      {isLoading ? (
        <h2>Cargando....</h2>
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial}/>
      )}
    </>
  );
};

export default ItemDetailContainer;
