import React, { Component } from "react";
import "./styles/bookTile.css";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BookTile extends Component {
  state = {};
  render() {
    return (
      <div className="container bookTile" style={{ marginBottom: "10px" }}>
        <h6 style={{ fontSize: "1rem" }}>{this.props.name}</h6>
        <div className="row image">
          <Link to={`/books/${this.props.id}`}>
            <img src={this.props.imageUrl} alt="" />
          </Link>
        </div>
        {/* <div className="row priceRow"> */}
        <div>
          <h6 style={{ fontSize: "0.9rem" }}>Price: Rs.{this.props.price} </h6>
          <button
            className="btn btn-outline-secondary btn-md"
            style={{ fontSize: "0.69rem" }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />  Add to Cart  
          </button>
        </div>
        {/* <div className="col-6"></div> */}
      </div>
      // </div>
    );
  }
}

export default BookTile;
