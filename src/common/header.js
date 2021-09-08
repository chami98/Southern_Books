import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  const dispatch = useDispatch();
  const selectedBooks = useSelector((state) => state.cart.selectedBooks);


  const onChangeHandler = (value) => {
    dispatch({
      type: "SET_SEARCH_STRING",
      payload: value,
    });
  };


  return (
    <header
      className="p-2 bg-dark text-white"
      style={{ position: "fixed", width: "100%", top: 0 }}
    >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-start">
          {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a> */}

          <ul className="nav col-4 me-sm-auto justify-content-center mb-md-0">
            <li>
              <Link to="/home" className="nav-link px-1 text-secondary">
                Home
              </Link>
            </li>

            <li>
              <Link to="/faq" className="nav-link px-1 text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-1 text-white">
                About
              </Link>
            </li>
          </ul>

          <form className="col-4 mb-sm-0 me-sm-3">
            <input
              type="search"
              className="form-control form-control-sm form-control-dark"
              placeholder="Search..."
              aria-label="Search"
              onChange={(e) => onChangeHandler(e.target.value)}
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-sm btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-sm btn-warning">
              Sign-up
            </button>
          </div>
          <div>
            <Link to="/faq" className="nav-link px-1 text-white">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{
                  marginLeft: "20px",
                  fontSize: "21px",
                  marginBottom: "0px",
                }}
              />{" "}
              <span class="position-absolute top-1 start-70 translate-middle badge rounded-pill bg-danger">
                {selectedBooks.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
