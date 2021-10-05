import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../common/layout";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { QuantityPicker } from "react-qty-picker";
import { Link } from "react-router-dom";
import ErrorComponent from "../errorComponent/errorComponent";

const Book = ({ match }) => {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) => state.book.currentBook);
  const loading = useSelector((state) => state.book.loading);
  const responseErrorCode = useSelector(
    (state) => state.book.responseErrorCode
  );

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(1);
  }, [currentBook.availableQuantity]);

  const handleQuantity = (value) => {
    console.log("handleQuantity");
    setQuantity(value);
  };

  const handleAddtoCart = () => {
    if (quantity > 0 && quantity <= currentBook.availableQuantity) {
      dispatch({
        type: "ADD_CURRENT_BOOK_TO_THE_CART",
        payload: { selectedBook: currentBook, selectedBookQty: quantity },
      });
    } else {
      alert(`Sorry, we do not have enough of that item available`);
    }
  };

  useEffect(() => {
    dispatch({
      type: "GET_BOOK_BY_ID",
    });

    axios
      .get(BASE_URL + `/books/${match.params.id}`)
      .then((result) => {
        const book = result.data;
        dispatch({
          type: "GET_BOOK_BY_ID_SUCCESS",
          payload: book,
        });
      })
      .catch((err) => {
        console.log("GET_BOOK_BY_ID_FAILED", err.response.status);
        dispatch({
          type: "GET_BOOK_BY_ID_FAILED",
          payload: { statusCode: err.response.status },
        });
      });
  }, []);

  if (responseErrorCode) {
    return <ErrorComponent />;
  }

  if (!loading) {
    return (
      <Layout hideSideBar>
        <div
          className="container"
          style={{
            marginTop: "65px",
            textAlign: "left",
            marginRight: "0px",
            marginLeft: "100px",
            paddingRight: "0px",
          }}
        >
          <div className="row">
            <nav aria-label="breadcrumb" style={{ fontSize: "20px" }}>
              <ol className="breadcrumb" style={{ fontFamily: "Barlow" }}>
                <li className="breadcrumb-item">
                  <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "red" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item ">
                  <Link
                    to="#"
                    className="disabled"
                    style={{
                      textDecoration: "none",
                      color: "#6c757d",
                      cursor: "auto",
                    }}
                  >
                    {currentBook.category ? currentBook.category.name : null}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {currentBook.name}
                </li>
              </ol>
            </nav>
            <div className="col-3">
              <img
                src={currentBook.imageUrl}
                alt=""
                style={{ height: "auto", width: "100%"}}
              />
            </div>
            <div
              className="col-5"
              style={{ paddingLeft: "120px", fontFamily: "Quicksand" }}
            >
              <h1>{currentBook.name}</h1>
              <h5>Author: {currentBook.authors}</h5>
              <h5>
                <span class="badge rounded-pill bg-success">
                  {" "}
                  {`Rs. ${currentBook.price}`}
                </span>
              </h5>
              <h6>ISBN: {currentBook.isbn}</h6>

              <h6>Pages: {currentBook.pages}</h6>
              <h6>Dimensions: {currentBook.dimensions}</h6>
              <h6>Rating:{currentBook.rating}</h6>
              <p >Description: <p style={{fontStyle:"italic"}}>{currentBook.description }</p></p>

              <div>
                <div style={{ float: "left" }}>
                  <h5 style={{ marginTop: "15px", marginRight: "20px" }}>
                    Quantity
                  </h5>
                </div>
                <div style={{ float: "left" }}>
                  <QuantityPicker
                    value={quantity}
                    smooth
                    min={1}
                    width="7.2rem"
                    max={currentBook.availableQuantity}
                    style={{ background: "red" }}
                    onChange={(value) => handleQuantity(value)}
                  />
                  <h6
                    style={{
                      marginTop: "5px",
                      marginLeft: "15px",
                      fontSize: "18px",
                      fontFamily: "Quicksand",
                    }}
                  >
                    <span class="badge rounded-pill bg-warning text-dark ">
                      {`${currentBook.availableQuantity} Available`}{" "}
                    </span>{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-4 "
              style={{ paddingLeft: "100px", height: "auto", width: "auto" }}
            >
              <button
                className="btn btn-outline-secondary btn-lg"
                style={{
                  fontSize: "0.9rem",

                  height: "auto",
                  width: "auto",
                }}
                onClick={handleAddtoCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
              </button>
              <button
                className="btn btn-success "
                style={{ marginLeft: "5px" }}
              >
                {" "}
                Buy now
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout hideSideBar>
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-primary "
            style={{
              width: "5rem",
              height: "5rem",
              fontSize: "30px",
              marginTop: "43vh",
            }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Book;
