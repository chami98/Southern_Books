import React, { Component } from 'react';

import { useSelector } from "react-redux";


const Cart = () => {

  const selectedBooks = useSelector((state) => state.cart.selectedBooks);


  return (
    <div>
      <table class="table">
        <thead style={{ color: "white" }}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Author</th>
            <th scope="col">Qty</th>
          </tr>
        </thead>
        <tbody>
          {selectedBooks.map((book) => (
            <tr style={{ color: "white" }}>
              <td>{book.name}</td>
              <td>{book.authors[0]}</td>
              <td>{book.selectedBookQty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
