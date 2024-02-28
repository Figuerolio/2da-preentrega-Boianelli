import { Button } from "@mui/material";

export const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", gap: "30px" }}>
        <Button
          variant="contained"
          onClick={subOne}
          disabled={counter === 1 ? true : false}
        >
          Restar
        </Button>
        <Button variant="contained" onClick={addOne}>
          Sumar
        </Button>
        <h2> {counter} </h2>

        <Button variant="outlined" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
