import React, { useContext } from "react";
import Product from "./Product/Product";
import Loading from "../Loading/Loading";
import { appContext } from "../../context/appContext";

const Products = () => {
  let { products } = useContext(appContext);
  let markUp = <Loading />;
  if (products.length) {
    let productItems = products.map((product) => (
      <Product key={product.id} {...product} />
    ));
    markUp = (
      <div className="container mb-5">
        <div className="row gy-5 p-sm-2 p-5">{productItems}</div>
        <footer className="mt-3 text-center">
          Developed with Love by{" "}
          <a
            href="https://github.com/AliMsdy"
            target="blank"
            className="text-decoration-none"
          >
            AliMoosabadi
          </a>
        </footer>
      </div>
    );
  }
  return markUp;
};

export default Products;
