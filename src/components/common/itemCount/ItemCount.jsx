import { Button } from "@mui/material";

export const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div>
        <Button onClick={subOne} disabled={counter === 1 ? true : false}>
          Restar
        </Button>
        <Button onClick={addOne}>Sumar</Button>
        <h2> {counter} </h2>

        <Button onClick={() => onAdd(counter)}>Agregar al carrito</Button>
      </div>
    </>
  );
};
