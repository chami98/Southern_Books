import React, { Component } from "react";
import "./styles/bookTile.css";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";

const BookTile = ({ book }) => {
  const dispatch = useDispatch();
  const { id, name, imageUrl, price, availableQuantity } = book;

  const handleAddToCart = () => {
    if (availableQuantity > 0)
      dispatch({
        type: "ADD_CURRENT_BOOK_TO_THE_CART",
        payload: { selectedBook: book, selectedBookQty: 1 },
      });
  };

  return (
    <div className="container bookTile" style={{ marginBottom: "10px" }}>
      <h6 style={{ fontSize: "1.03rem", fontFamily: "Lato" }}>{name}</h6>
      <div className="row image">
        <Link to={`/books/${id}`}>
          <img src={imageUrl} alt="" />
        </Link>
      </div>

      <div>
        <h6 style={{ fontSize: "0.91rem", fontFamily: "Roboto" }}>
          Rs.{price}/={" "}
        </h6>
        <button
          disabled={availableQuantity == 0}
          className="btn btn-outline-secondary btn-md"
          style={{ fontSize: "0.69rem" }}
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookTile;
