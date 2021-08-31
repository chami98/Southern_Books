import React, { Component } from "react";
import "./styles/bookTile.css";

class BookTile extends Component {
  state = {};
  render() {
    return (
      <div className="container bookTile" style={{marginBottom: "10px"}}>
        <h6 style={{ fontSize: "0.82rem" }}>{this.props.name}</h6>
        <div className="row image">
          <img src={this.props.imageUrl} alt="" />
        </div>
        <div className="row priceRow">
          <div className="col-6">
            <h6 style={{ fontSize: "0.6rem" }}>Price: {this.props.price} </h6>
          </div>
          <div className="col-6">
            <button
              className="btn btn-primary btn-sm"
              style={{ fontSize: "0.6rem" }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookTile;
