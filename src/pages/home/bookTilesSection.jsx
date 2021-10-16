import React, { Component } from "react";
import BookTile from "./bookTile";
import axios from "axios";
import { BASE_URL } from "./../../constants";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const BookTilesSection = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.app.books);
  const selectedCategoryId = useSelector(
    (state) => state.app.selectedCategoryId
  );
  const searchString = useSelector((state) => state.app.searchString);

  useEffect(() => {
    // starts loading

    axios
      .get(BASE_URL + "/books", {
        params: {
          categoryId: selectedCategoryId,
          searchString: searchString,
        },
      })
      .then((result) => {
        // Loading Finished
        dispatch({
          type: "BOOKS_LOADING_FINISHED",
        });

        const payload = {
          books: [...result.data],
        };

        dispatch({
          type: "SET_BOOKS",
          payload: payload,
        });
      })

      .catch(() => {
        // Loading Finished
        dispatch({
          type: "BOOKS_LOADING_FINISHED",
        });
      });
  }, [selectedCategoryId, searchString]);

  const booksLoading = useSelector((s) => s.app.booksLoading);

  if (booksLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-primary "
          style={{
            width: "5rem",
            height: "5rem",
            fontSize: "30px",
            marginTop: "30vh",
          }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    );
  } else if (!booksLoading && books.length == 0) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-primary "
          style={{
            width: "5rem",
            height: "5rem",
            fontSize: "30px",
            marginTop: "30vh",
          }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
              <BookTile book={book} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default BookTilesSection;

const randFunc = () => {
  return {
    message: "Something went wrong",
  };
};
