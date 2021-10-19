import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./../../common/layout";
import axios from "axios";
import { BASE_URL } from "./../../constants";
import { useState, useEffect } from "react";
import BookStockDetails from "./booksStockDetails";
import { ToastContainer, toast } from "react-toastify";

const Employee = () => {
  useEffect(() => {
    toast.success("EMPLOYEE DASHBOARD", {
      position: "top-center",
      autoClose: 5500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    // starts loading

    axios
      .get(BASE_URL + "/books")
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
  }, []);

  const books = useSelector((state) => state.app.books);
  console.log("books", books);

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
            marginTop: "45vh",
          }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    );
  } else {
    return (
      <Layout hideSideBar>
        <h1 style={{ marginTop: "80px", fontFamily: "Comfortaa" }}>
          {" "}
          <i
            class="fas fa-layer-group"
            style={{ marginRight: "8px", marginBottom: "20px" }}
          ></i>
          Products Stock List
        </h1>

        <BookStockDetails books={books} />
      </Layout>
    );
  }
};

export default Employee;
