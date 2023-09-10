import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../../../Redux/productsSlice/productsSlice";

const SelectedProduct = ({ title, price, image, amount, id }) => {
  const dispatch = useDispatch();
  let name = `${title.split(" ")[0]} ${title.split(" ")[1]}`;
  return (
    <div className="bg-white border border-2 rounded-3 p-2 mb-4 d-flex justify-content-between align-items-center">
      <img className="img-fluid w-25" src={image} alt="product" />
      <div className="d-flex flex-column align-items-center">
        <p className="text-primary text-center">
          <b>{name}</b>
        </p>
        <p className="text-success">
          <b>{price.toFixed(2)} $</b>
        </p>
      </div>
      <span className="btn btn-warning text-white pe-none px-sm-2 py-1">
        {amount}
      </span>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => dispatch(decrement(id))}
          className="btn btn-primary px-sm-2 px-1 mx-1"
        >
          {amount === 1 ? (
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-minus" />
          )}
        </button>
        <button
          onClick={() => dispatch(increment(id))}
          className="btn btn-primary px-sm-2 px-1 mx-1"
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default SelectedProduct;
