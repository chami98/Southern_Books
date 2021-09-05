import React from "react";
import axios from "axios";
import { BASE_URL } from "./../constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./../common/layout";

const Book = ({ match }) => {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) => state.book.currentBook);
  const loading = useSelector((state) => state.book.loading);

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
        console.log(err);
        dispatch({
          type: "GET_BOOK_BY_ID_FAILED",
        });
      });
  }, []);

  if (!loading) {
    return (
      <Layout hideSideBar>
        <div>
          <h1>This is book component</h1>
          <h5>book id: {match.params.id}</h5>
          <h5>bookName: {currentBook.name}</h5>
          <div>
            <img src={currentBook.imageUrl} alt="" />
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
