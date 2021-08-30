import React, { Component } from "react";
import { dummyBooks } from "../../dummyData/dummyBooks";

class BookTile extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "left" }}>{this.props.name}</h2>
        <div className="row" style={{ marginBottom: "10px" }}>
          <img style ={{height: "200px" , width: "auto" , margin: "0 auto"}}
            src={this.props.imageUrl}
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-8">
            <h4 style={{ textAlign: "left" }}>Price: {this.props.price} </h4>
          </div>
          <div className="col-4">
            <button className="btn btn-primary"> Add </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookTile;
