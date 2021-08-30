import React, { Component } from "react";
import BookTile from "./bookTile";

import { dummyBooks } from "./../../dummyData/dummyBooks";

class BookTilesSection extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        {dummyBooks.map((book) => (
          <div className="col-4">
            <BookTile name={book.name} price={book.price} imageUrl={book.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
}

export default BookTilesSection;
