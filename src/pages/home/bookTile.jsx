import React, { Component } from "react";
import "./styles/bookTile.css";
import { Link } from "react-router-dom";

class BookTile extends Component {
  state = {};
  render() {
    return (
      <div className="container bookTile" style={{ marginBottom: "10px" }}>
        <h6 style={{ fontSize: "0.82rem" }}>{this.props.name}</h6>
        <div className="row image">
          <Link to={`/books/${this.props.id}`}>
            <img src={this.props.imageUrl} alt="" />
          </Link>
        </div>
        {/* <div className="row priceRow"> */}
        <div>
          <h6 style={{ fontSize: "0.8rem" }}>Price: Rs.{this.props.price} </h6>
          <button
            className="btn btn-primary btn-sm"
            style={{ fontSize: "0.6rem" }}
          >
            Add to Cart
          </button>
        </div>
        {/* <div className="col-6"></div> */}
      </div>
      // </div>
    );
  }
}

export default BookTile;
