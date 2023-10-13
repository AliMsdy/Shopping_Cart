import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Product.module.css";

import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../../../Redux/productsSlice/productsSlice";

const Product = ({ title, price, image, id, amount }) => {
  const dispatch = useDispatch();
  let name = `${title.split(" ")[0]} ${title.split(" ")[1]}`;
  let replaceElement = (
    <button onClick={() => dispatch(increment(id))} className="btn btn-primary">
      Add to Cart
    </button>
  );
  if (amount > 0) {
    replaceElement = (
      <div>
        <button
          onClick={() => dispatch(decrement(id))}
          className="btn btn-primary mx-1 py-1 px-2"
        >
          {amount > 1 ? (
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          )}
        </button>
        <span className="text-primary mx-1 h5" style={{ color: "1a73e8" }}>
          {amount}
        </span>
        <button
          onClick={() => dispatch(increment(id))}
          className="btn btn-primary mx-1 py-1 px-2"
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </div>
    );
  }
  // console.log("hello world");
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 ">
      <div
        className={`border border-1 rounded-3 p-3 bg-white ${styles.product}`}
      >
        <div>
          <img
            className={`d-flex mx-auto ${styles.img}`}
            src={image}
            alt="product"
          />
        </div>
        <p className="my-3">{name}</p>
        <span className="d-block my-3">{price} $</span>
        <div className="d-flex justify-content-between align-items-center">
          <Link
            to={`/products/${id}`}
            className="text-info text-decoration-none"
          >
            Details
          </Link>
          {replaceElement}
        </div>
      </div>
    </div>
  );
};

export default Product;
