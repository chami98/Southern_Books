import React, { Component } from "react";
import BookTile from "./bookTile";
import { dummyBooks } from "./../../dummyData/dummyBooks";
import axios from "axios";

class BookTilesSection extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3005/books").then((result) => {
      this.setState({
        books: result.data,
      });
    });
  }

  render() {
    return (
      <div className="row">
        {this.state.books.map((book) => (
          <div key={book.id} className="col-lg-2 col-md-3 col-sm-6">
            <BookTile
              name={book.name}
              price={book.price}
              imageUrl={book.imageUrl}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default BookTilesSection;
