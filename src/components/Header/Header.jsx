import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
  let { span, lessThanTen, moreThanTen } = styles;
  let spanClassName = `${span} ${lessThanTen}`;

  const products = useSelector((state) => state.products);
  let amountOfBasketProduct = products.reduce(
    (total, current) => (total += current.amount),
    0
  );
  if (amountOfBasketProduct > 9) spanClassName = `${span} ${moreThanTen}`;
  return (
    <header className="container-fluid bg-white py-3 shadow mb-sm-5 mb-0 position-sticky top-0">
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="border-bottom border-2 border-primary">
          <Link to="/products" className="text-decoration-none text-primary">
            Products
          </Link>
        </div>
        <div>
          <Link
            to="/cart"
            className="h2 text-primary text-decoration-none position-relative"
          >
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            <span className={spanClassName}>{amountOfBasketProduct}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
