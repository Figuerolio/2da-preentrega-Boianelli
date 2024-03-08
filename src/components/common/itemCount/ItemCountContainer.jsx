import { useState } from "react";
import { ItemCount } from "./ItemCount";
import Swal from "sweetalert2";

const ItemCountContainer = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      Swal.fire("Stock máximo alcanzado");
    }
  };

  const subOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      Swal.fire("No se puede restar menos");
    }
  };

  return <ItemCount counter={counter} addOne={addOne} subOne={subOne} />;
};

export default ItemCountContainer;
