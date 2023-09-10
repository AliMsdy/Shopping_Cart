import { useEffect } from "react";
import Product from "./Product/Product";
import Loading from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { fetchProductsData } from "../../Redux/productsSlice/productsSlice";
import { useSelector } from "react-redux";
const Products = () => {
  const { loading, products, error } = useSelector((state) => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return (
    <div
      style={{ height: "calc(100vh - 130px)" }}
      className=" container mb-5 d-flex flex-column"
    >
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
      <footer className="mt-auto text-center p-4">
        Developed by{" "}
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
};

export default Products;
