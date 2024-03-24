import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Badge } from "@mui/material";


export const CartWidget = () => {
  const {totalQuantityCart} = useContext(CartContext);
  let total = totalQuantityCart()
  return (
    <div>
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingCartOutlinedIcon color="secondary" fontSize="large" />
      </Badge>
      
    </div>
  );
};
