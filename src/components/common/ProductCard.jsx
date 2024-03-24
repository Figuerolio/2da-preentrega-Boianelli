import { Link } from "react-router-dom";
export const ProductCard = ({ img, title, price, id }) => {
  // const  { titulo, desc, precio } = prop

  return (
    <div className="bodyCard">
      <img className="imgArt" src={img} alt="" />
      <div className="infoCard">
        <h3>{title}</h3>
        <h3>${price}</h3>
        <Link to={`/item/${id}`}>
          <button>
            <h3>Ver Detalle</h3>
          </button>
        </Link>
      </div>
    </div>
  );
};
