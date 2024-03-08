import React from "react";
import { ItemCountContainer } from "../../common";
import { Link } from "react-router-dom";
import "./ItemDetailContainer.css";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"imgContainerDetail"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2>
            <span>Nombre:</span> {item.title}
          </h2>
          <h3>
            <span>Descripcion:</span> {item.description}
          </h3>
          <h3>
            <span>Precio:</span> ${item.price}.-
          </h3>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ItemCountContainer stock={item.stock} onAdd={onAdd} />
      </div>

      <Link to={"/"}>
        <button className=" btn btn-white">Atras</button>
      </Link>
    </div>
  );
};
