import React, { Component } from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  const selectedBooks = useSelector((state) => state.cart.selectedBooks);

  return (
    <div>
      <table class="table" style={{ color: "white" }}>
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
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
