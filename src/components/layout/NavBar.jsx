import { Link } from "react-router-dom";
import {CartWidget} from "../common/cart/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <img
        className="logo"
        src="https://www.buhozon.com/recursos/imagenes/thumbnails/guitarist-539981_1920_1000x800.jpg"
        alt=""
      />
      <ul>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/category/vestimenta">
          <button>Vestimenta</button>
        </Link>
        <Link to="/category/accesorios">
          <button>Accesorios</button>
        </Link>
        <Link to="/category/media">
          <button>Media</button>
        </Link>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
