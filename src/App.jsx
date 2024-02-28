import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar";
import { ItemDetailContainer, ItemListContainer } from "./components/pages";
import { Cart, Item } from "./components/common";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ItemListContainer} />
          <Route path="/cart" element={Cart} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={ItemListContainer} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
