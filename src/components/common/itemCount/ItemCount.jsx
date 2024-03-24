import { Button } from "@mui/material";


export const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div>
        <button onClick={subOne} disabled={counter === 1 ? true : false}>
          Restar
        </button>
        <button onClick={addOne}>Sumar</button>
        <h2> {counter} </h2>

        <button onClick={() => onAdd(counter)}>Agregar al carrito</button>
      </div>
    </>
  );
};
