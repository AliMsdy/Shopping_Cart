import React, { useContext, useState } from "react";
import SelectedProduct from "./SelectedProduct/SelectedProduct";
import { appContext } from "../../context/appContext";
import { Link } from "react-router-dom";

const Cart = () => {
  let [checkout, setCheckout] = useState(false);
  let { products, dispatch } = useContext(appContext);
  let addToBasketProducts = products.filter((product) => product.amount > 0);
  let totalItems = 0;
  let totalPrice = 0;
  for (let item of products) {
    totalItems += item.amount;
    totalPrice += item.amount * item.price;
  }
  let markUp;
  if (totalItems > 0) {
    markUp = (
      <div className="bg-white border border-2 rounded-3 py-3 px-2">
        <p>
          <b className="text-primary">Total Items:</b> {totalItems}
        </p>
        <p>
          <b className="text-primary">Total Payments:</b>{" "}
          {totalPrice.toFixed(2)} $
        </p>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <span
            onClick={() => dispatch({ type: "Clear" })}
            className="btn text-success"
          >
            Clear
          </span>
          <button
            className="btn btn-success"
            onClick={() => {
              setCheckout(true);
              dispatch({ type: "Clear" });
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  } else if (!checkout) {
    markUp = (
      <div>
        <h3 className="text-muted">Want To Buy ?</h3>
        <Link className="btn btn-primary btn-sm" to="/products">
          Go Back to Shop
        </Link>
      </div>
    );
  } else {
    markUp = (
      <div>
        <h3 className="text-success">Checked Out Successfully</h3>
        <Link
          className="btn btn-primary btn-sm"
          to="/products"
          onClick={() => setCheckout(false)}
        >
          Buy More
        </Link>
      </div>
    );
  }
  return (
    <div className="container my-5">
      <div className="row gy-4 mb-4">
        <div className="col-md-8">
          {addToBasketProducts.map((product) => (
            <SelectedProduct id={product.id} {...product} />
          ))}
        </div>
        <div className="col-md-4 ">{markUp}</div>
      </div>
    </div>
  );
};

export default Cart;
