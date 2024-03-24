import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer, ItemListContainer } from "./components/pages";
import { CartContainer } from "./components/common";
import { Layout } from "./components/layout/Layout";
import { CartContextProvider } from "./context/CartContext";
import { CheckOutContainer } from "./components/pages/checkOut/CheckOutContainer";

const App = () => {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<CheckOutContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
   
  );
};

export default App;
