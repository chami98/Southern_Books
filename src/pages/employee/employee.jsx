import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewBooks from "./ViewBooks";
import Layout from "./../../common/layout";

const Employee = () => {
  const books = useSelector((state) => state.app.books);
  console.log("books", books);
  return (
    <Layout hideSideBar>
      <h1 style={{ marginTop: "80px" }}>
        {" "}
        <i
          class="fas fa-user-shield"
          style={{ marginRight: "5px", marginBottom: "20px" }}
        ></i>
        Employee Section
      </h1>

      <div className="container">
        <table class="table" style={{ textAlign: "left" }}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th
                scope="col"
                style={{ paddingRight: "118px ", textAlign: "right" }}
              >
                Book Name
              </th>
              <th scope="col">Author</th>
              <th scope="col">ISBN</th>
              <th scope="col">Category</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {books.map((book) => (
            <tbody>
              <tr key={book.id}>
                <th scope="row"></th>
                <td>
                  {" "}
                  <div className="row">
                    <div
                      className="col"
                      style={{ marginRight: "0px", textAlign: "center" }}
                    >
                      <img
                        src={book.imageUrl}
                        alt=""
                        style={{ width: "80px" }}
                      />{" "}
                    </div>

                    <div className="col" style={{ marginLeft: "0px" }}>
                      <span class="badge rounded-pill bg-warning text-dark ">
                        {book.name}{" "}
                      </span>
                    </div>
                  </div>
                </td>
                <td>{book.authors}</td>
                <td>{book.isbn}</td>
                <td>{book.category.name}</td>
                <td>
                  {" "}
                  <span class="badge rounded-pill bg-secondary  ">
                    {book.availableQuantity} In Stock{" "}
                  </span>
                </td>
                <td>{book.price}/=</td>
                <td>
                  <button
                    className="btn btn-outline-primary btn-sm "
                    style={{ marginRight: "5px" }}
                  >
                    <i class="fas fa-edit"></i>
                  </button>

                  <ViewBooks book={book}/>

                  <button className="btn btn-outline-danger btn-sm">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}{" "}
        </table>
      </div>
    </Layout>
  );
};

export default Employee;
