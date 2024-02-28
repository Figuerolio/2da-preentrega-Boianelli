import React from "react";
import { Link } from "react-router-dom";

export const ItemDetail = () => {
  return (
    <div className="p-5 border border-3 rounded-4">
      <div className="d-flex justify-content-center">
        <img src="{img}" alt="" />
      </div>
      <div className="d-flex flex-column">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <Link>
        <button className=" btn btn-white">Atras</button>
      </Link>
    </div>
  );
};
