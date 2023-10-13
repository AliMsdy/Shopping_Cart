import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//Components
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import ProductDetail from "./components/ProductDetail/ProductDetail";

//Redux state
import { useDispatch } from "react-redux";
import { fetchProductsData } from "./Redux/productsSlice/productsSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsData());
  }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </Layout>
  );
};

export default App;
