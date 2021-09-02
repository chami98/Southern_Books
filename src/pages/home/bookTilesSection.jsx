import React, { Component } from "react";
import BookTile from "./bookTile";
import axios from "axios";
import { BASE_URL } from './../../constants';

class BookTilesSection extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get( BASE_URL + "/books").then((result) => {
      this.setState({
        books: result.data,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.books.map((book) => (
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
  }
}

export default BookTilesSection;
