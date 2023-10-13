import Product from "./Product/Product";
import Loading from "../Loading/Loading";

import { useSelector } from "react-redux";
const Products = () => {
  const products = useSelector((state) => state.products);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  return (
    <div className="row gy-5 p-sm-2 p-5 text-center mb-5">
      {loading ? (
        <Loading />
      ) : error ? (
        <p className="text-danger">
          {error.message}
          <div>try again later</div>
        </p>
      ) : (
        products.map((product) => <Product key={product.id} {...product} />)
      )}
    </div>
  );
};

export default Products;
