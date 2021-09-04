import React, { Component } from "react";
import BookTile from "./bookTile";
import axios from "axios";
import { BASE_URL } from "./../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const BookTilesSection = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.app.books);
  const selectedCategoryId = useSelector((state) => state.app.selectedCategoryId);


  useEffect(() => {
    axios.get(BASE_URL + "/booksByCategory" + ( selectedCategoryId ? ("?categoryId=" + selectedCategoryId) : "" )).then((result) => {
      const payload = {
        books: [...result.data],
      };

      dispatch({
        type: "SET_BOOKS",
        payload: payload,
      });
    });
  }, [selectedCategoryId]);

  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
            <BookTile
              name={book.name}
              price={book.price}
              imageUrl={book.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTilesSection;
