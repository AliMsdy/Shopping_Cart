import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { appContext } from "../../context/appContext";

const ProductDetail = () => {
  const { id } = useParams();
  let { products } = useContext(appContext);
  let navigate = useNavigate();
  let selectedProduct = products[id - 1];
  if (!selectedProduct) {
    navigate("/products");
  } else {
    let { title, image, category, price, description } = selectedProduct;
    let markUp = (
      <div className="container my-5 p-4 ">
        <div className="row gy-4 py-3 bg-white border border-2 rounded-4">
          <div className="col-md-6 d-flex align-items-center">
            <img
              className="img-fluid w-75 d-block mx-auto"
              src={`${image}`}
              alt="product"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="border border-2 p-1 p-sm-3 py-4 rounded-3">
              <p className="text-primary mb-4 text-sm-start text-center">
                {title}
              </p>
              <p className="mb-4 text-justify">{description}</p>
              <p className="mb-4">
                <b className="text-warning">Category:</b> {category}
              </p>
              <div className="d-flex mt-5 justify-content-between">
                <button className="btn btn-success shadow p-sm-2 p-1 pe-none">
                  {price.toFixed(2)} $
                </button>
                <Link
                  to="/products"
                  className="btn btn-primary shadow p-sm-2 p-1"
                >
                  Back to Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return markUp;
  }
};

export default ProductDetail;
