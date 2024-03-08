import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/layout/NavBar";
import { ItemDetailContainer, ItemListContainer } from "./components/pages";
import { Cart } from "./components/common";
import { Layout } from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes element={<Layout />}>
        <Route>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={Cart} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
