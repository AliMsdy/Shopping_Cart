import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

//Components
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import ProductDetail from "./components/ProductDetail/ProductDetail";

//Context
import ContextProvider from "./context/appContext";

const App = () => {
  return (
    <ContextProvider>
      <Layout>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </Layout>
    </ContextProvider>
  );
};

export default App;
