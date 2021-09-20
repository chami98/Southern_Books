import React, { Component } from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  const selectedBooks = useSelector((state) => state.cart.selectedBooks);

  let totalPrice = 0;
  selectedBooks.forEach((book) => {
    totalPrice += book.price * book.selectedBookQty;
  });

  return (
    <div>
      <h4
        style={{ textAlign: "center", marginTop: "8px", marginBottom: "12px" }}
      >
        <i
          class="fas fa-shopping-cart"
          style={{ fontSize: "18px", marginRight: "5px" }}
        ></i>
        Shopping Cart{" "}
      </h4>
      <table class="table" style={{ color: "white", marginBottom: "4px" }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {selectedBooks.map((book) => (
            <tr>
              <td>{book.name}</td>
              <td>{book.authors[0]}</td>
              <td>{book.selectedBookQty}</td>
              <td>{`Rs. ${book.selectedBookQty * book.price}`}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" style={{ textAlign: "center", fontSize: "20px" }}>
              <i
                class="fas fa-tag"
                style={{ fontSize: "16px", marginRight: "5px" }}
              ></i>
              {`Total price Rs. ${totalPrice}/=`}{" "}
              <button
                type="button"
                class="btn btn-success "
                style={{
                  width: "100%",
                  marginTop: "10px",
                  fontSize: "17px",
                  borderRadius: "14px",
                }}
              >
                CHECKOUT
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
};

export default Cart;
