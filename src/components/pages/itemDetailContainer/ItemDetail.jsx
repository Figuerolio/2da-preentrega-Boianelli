import React from "react";
import { ItemCountContainer } from "../../common";
import { Link } from "react-router-dom";
import "./ItemDetailContainer.css";
import Swal from "sweetalert2";

export const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div>
      <div className={"containerItemDetail"}>
        <div className={"imgContainerDetail"}>
          <img className="imgDeteArt" src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2>
             {item.title}
          </h2>
          <h3>
             {item.description}
          </h3>
          <h3>
             ${item.price}.-
          </h3>
        </div>
      </div>

      {
          initial && <h3>Ya tienes {initial} en el carrito</h3> 
        }
       
      
      <div className="count">
        <ItemCountContainer stock={item.stock} onAdd={onAdd} initial={initial}/>
      </div>

      <Link to={"/"}>
        <button className=" btn btn-white">Atras</button>
      </Link>
    </div>
  );
};
