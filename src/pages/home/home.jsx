import React, { Component } from "react";
import Header from "./../../common/header";
import SideBar from "../../common/sideBar";
import { dummyCategories } from "../../dummyData/dummyCategories";
import BookTilesSection from "./bookTilesSection";

class Home extends Component {
  state = {
    selectedCategoryId: dummyCategories[0].id,
    selectedCategoryName: dummyCategories[0].name,
  };

  handleSelectedId = (id) =>
    this.setState({
      selectedCategoryId: id,
    });

  handleSelectedName = (name) =>
    this.setState({
      selectedCategoryName: name,
    });

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 ">
            <SideBar
              onChangeCategoryId={this.handleSelectedId}
              onChangeCategoryName={this.handleSelectedName}
              selectedCategoryId ={this.state.selectedCategoryId}
              selectedCategoryName ={this.state.selectedCategoryName}

            />
          </div>
          <div className="col-xl-9 col-lg-9 col-md-8 col-sm-6 ">
            <h1>Selected Category: {this.state.selectedCategoryName}</h1>
            <BookTilesSection/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
