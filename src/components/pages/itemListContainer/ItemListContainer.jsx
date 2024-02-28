import React, { useEffect, useState } from "react";
import { getProducts } from "../../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [category] = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProducts().then((resp) => {
      if (category) {
        const productsFilter = resp.filter(
          (product) => product.category === category
        );
        setProducts(productsFilter);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    });
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
